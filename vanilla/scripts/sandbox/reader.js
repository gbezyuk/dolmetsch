import ReaderText from "./components/ReaderText.js"
import WordInfo from "./components/WordInfo.js"
import defaultRawText from "../reader/text.js"

console.log("Träumen Androiden von elektrischen Schafen?")

const $readerText = document.getElementById('readerText')
const $wordInfo = document.getElementById('wordInfo')

$readerText.setAttribute('raw-text', defaultRawText)

$readerText.addEventListener('selection-change', ({ details: { wordRaw, wordSanitized } }) => {
	$wordInfo.setAttribute('original-word', wordRaw)
	$wordInfo.setAttribute('original-word-sanitized', wordSanitized)
})

$wordInfo.addEventListener('translation-updated', (e) => {
	$readerText.dispatchEvent(new Event("vocab-updated"))
})
