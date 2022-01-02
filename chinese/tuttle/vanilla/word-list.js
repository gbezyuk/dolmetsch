import words from '../data/words.js'
import wordAudios from '../data/audio/parsed/words.js'
import ChineseWord from '../components/ChineseWord.js'

const renderWords = () => {
	const html = words.reduce((html, word) => {
		html += `<chinese-word
			hanzi="${word.hanzi}"
			pinyin="${word.pinyin}"
			english="${word.english}"
			audios="${wordAudios[word.pinyin] ? `data:application/json,${btoa(JSON.stringify(wordAudios[word.pinyin]))}` : ""}"
		></chinese-word>\n`
		return html
	}, '')
	document.getElementById('words').innerHTML = html
}

renderWords()

console.log('total:', words.length, 'words')