import characters from '../data/characters.js'
import ChineseCharacter from '../components/ChineseCharacter.js'

const renderCharacters = () => {
	const html = characters.reduce((html, character) => {
		html += `<chinese-character cid="${character.id}"
			hanzi="${character.hanzi}"
			pinyin="${character.pinyin}"
			english="${character.english}"
			audios="${character.audios ? `data:application/json,${btoa(JSON.stringify(character.audios))}` : ""}"
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