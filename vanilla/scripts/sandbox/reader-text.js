import ReaderText from "./components/ReaderText.js"
import defaultRawText from "../reader/text.js"

console.log("Träumen Androiden von elektrischen Schafen?")

const $readerText = document.getElementById('readerText')
$readerText.setAttribute('raw-text', defaultRawText)
$readerText.addEventListener('selection-change', ({ details: { wordRaw, wordSanitized } }) => {
	console.log(wordRaw, wordSanitized)
})

console.log('going NL')
$readerText.setAttribute('original-language', 'nl')
// $readerText.dispatchEvent(new Event("vocab-updated"))

setTimeout(() => {
	console.log('going DE')
	$readerText.setAttribute('original-language', 'de')
}, 2000)
