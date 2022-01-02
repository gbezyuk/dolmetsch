import characters from '../data/characters.js'
import words from '../data/words.js'
import wordAudios from '../data/audio/parsed/words.js'
import syllables from '../data/audio/parsed/syllables.js'
import ChineseCharacter from '../components/ChineseCharacter.js'
import ChineseWord from '../components/ChineseWord.js'
import digitizeSyllable from '../data/utils/digitizeSyllable.js'

const renderCharacters = () => {
	const html = characters.reduce((html, character) => {

		const wordsHtml = words.filter(
			word => word.hanzi.includes(character.hanzi)
		).reduce((html, word) => {
			html += `<chinese-word
				hanzi="${word.hanzi}"
				pinyin="${word.pinyin}"
				english="${word.english}"
				audios="${wordAudios[word.pinyin] ? `data:application/json,${btoa(JSON.stringify(wordAudios[word.pinyin]))}` : ""}"
			></chinese-word>\n`
			return html
		}, '')

		const digitizedPinyin = digitizeSyllable(character.pinyin)

		html += `
			<div class="wrapper">
				<chinese-character
					cid="${character.id}"
					hanzi="${character.hanzi}"
					pinyin="${character.pinyin}"
					english="${character.english}"
					audios="${syllables[digitizedPinyin] ? `data:application/json,${btoa(JSON.stringify(syllables[digitizedPinyin]))}` : ""}"
					radical="${character.radical?.character || ''}"
					composition="${character.composition || ''}"
					components="${character.components || ''}"
				>
				</chinese-character>
				${wordsHtml}
			</div>`
		return html
	}, '')
	document.getElementById('characters').innerHTML = html
}

renderCharacters()

console.log('total:', characters.length, 'characters;', words.length, 'words')
console.log('with sound:', characters.filter(c => syllables[digitizeSyllable(c.pinyin)]).length,
	'characters;', Object.keys(syllables).length, 'syllables;', Object.keys(wordAudios).length, 'words')