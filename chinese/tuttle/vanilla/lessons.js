import characters from '../data/characters.js'
import words from '../data/words.js'
import lessons from '../data/lessons.js'
import syllables from '../data/audio/parsed/syllables.js'
import wordAudios from '../data/audio/parsed/words.js'
import ChineseCharacter from '../components/ChineseCharacter.js'
import ChineseWord from '../components/ChineseWord.js'
import digitizeSyllable from '../data/utils/digitizeSyllable.js'

const renderCharacters = () => {
	let i = 0
	const html = lessons.reduce((html, lesson) => {
		i++

		const lessonHtml = lesson.reduce((html, hanzi) => {
			// console.log(hanzi)
			if (hanzi.length === 1) {
				const character = characters.find(c => c.hanzi === hanzi)
				if (!character) {
					console.log('character not found', hanzi)
					return html
				}
				const digitizedPinyin = digitizeSyllable(character.pinyin)
				html += `<chinese-character cid="${character.id}"
					hanzi="${character.hanzi}"
					pinyin="${character.pinyin}"
					english="${character.english}"
					audios="${syllables[digitizedPinyin] ? `data:application/json,${btoa(JSON.stringify(syllables[digitizedPinyin]))}` : ""}"
					radical="${character.radical?.character || ''}"
					composition="${character.composition || ''}"
					components="${character.components || ''}"
				></chinese-character>\n`
			} else {
				const word = words.find(c => c.hanzi === hanzi)
				if (!word) {
					console.log('word not found', hanzi)
					return html
				}
				html += `<chinese-word
					hanzi="${word.hanzi}"
					pinyin="${word.pinyin}"
					english="${word.english}"
					audios="${wordAudios[word.pinyin] ? `data:application/json,${btoa(JSON.stringify(wordAudios[word.pinyin]))}` : ""}"
				></chinese-word>\n`
			}
			return html
		}, '')

		html += `
			<div class="lesson">
				<h1>Lesson ${i}</h1>
				<div class="lesson-content">
					${lessonHtml}
				</div>
			</div>`
		return html
	}, '')
	document.getElementById('lessons').innerHTML = html
}

renderCharacters()

console.log('total:', lessons.length, 'lessons;', characters.length, 'characters;', words.length, 'words')