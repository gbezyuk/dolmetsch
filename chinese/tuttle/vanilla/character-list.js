import characters from '../data/characters.js'
import ChineseCharacter from '../components/ChineseCharacter.js'
import syllables from '../data/audio/parsed/syllables.js'
import digitizeSyllable from '../data/utils/digitizeSyllable.js'


const renderCharacters = () => {
	const html = characters.reduce((html, character) => {
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
		return html
	}, '')
	document.getElementById('characters').innerHTML = html
}

renderCharacters()

console.log('total:', characters.length, 'characters')