import characters from './data/characters.js'
import words from './data/words.js'
import ChineseCharacter from './components/ChineseCharacter.js'
import ChineseWord from './components/ChineseWord.js'

const renderCharacters = () => {
	const html = characters.reduce((html, character) => {

		const wordsHtml = words.filter(
			word => word.hanzi.includes(character.hanzi)
		).reduce((html, word) => {
			html += `<chinese-word hanzi="${word.hanzi}" pinyin="${word.pinyin}" english="${word.english}"></chinese-word>\n`
			return html
		}, '')

		html += `
			<div class="wrapper">
				<chinese-character
					cid="${character.id}"
					hanzi="${character.hanzi}"
					pinyin="${character.pinyin}"
					english="${character.english}"
				>
				</chinese-character>
				${wordsHtml}
			</div>`
		return html
	}, '')
	document.getElementById('characters').innerHTML = html
}

renderCharacters()
