import { initReader, fillTextNode } from "./reader-alternative/dom-interaction.js"
import { getTranslation, isTranslated, setTranslation } from './dict.js'
import demoText from './reader/text.js'

const $text = document.getElementById('text')
const targetLanguages = ['en', 'ru']
const currentLanguage = 'de'

const renderDictPresenceStatus = () => {
	[...document.getElementsByClassName('word-proper')].map($w => {
		const w = $w.innerText.toLowerCase()
		$w.classList.toggle('translated', isTranslated(currentLanguage, w))
	})
}

function onSelectionStateChange (selectionState) {
	// console.log(
	// 	selectionState.selectedWordSanitized,
	// 	selectionState.selectedWord,
	// 	targetLanguages.map(tl => getTranslation(currentLanguage, tl, selectionState.selectedWordSanitized))
	// )
	updateInfo(selectionState)
}

const $originalWord = document.getElementById('originalWord')
// const $dictionaryForm = document.getElementById('dictionaryForm')
// const $occurences = document.getElementById('occurences')
const $translationEn = document.getElementById('translationEn')
const $translationRu = document.getElementById('translationRu')

function updateInfo (selectionState) {
	const selectedWord = selectionState.selectedWord
	const dictionaryForm = getTranslation(currentLanguage, 'dictionaryForm', selectionState.selectedWordSanitized)
	const translationEn = getTranslation(currentLanguage, 'en', selectionState.selectedWordSanitized)
	const translationRu = getTranslation(currentLanguage, 'ru', selectionState.selectedWordSanitized)
	$originalWord.innerText =
		selectedWord === dictionaryForm || !dictionaryForm
			? selectedWord
			: `${selectedWord} (${dictionaryForm || '?'})`
	// $dictionaryForm.innerText = dictionaryForm
	// $occurences.innerText = occurences
	$translationEn.innerText = translationEn || ''
	$translationRu.innerText = translationRu || ''
}

const selectionState = initReader($text, onSelectionStateChange)
fillTextNode($text, demoText)
renderDictPresenceStatus()

document.body.addEventListener('keyup', (e) => {
	if (!selectionState.selectedWord) {
		return
	}
	if (e.target.classList.contains('translation')) {
		const translationText = e.target.innerText
		switch (e.target.id) {
			case 'translationRu':
				setTranslation(currentLanguage, 'ru', selectionState.selectedWord, translationText)
				break
			case 'translationEn':
				setTranslation(currentLanguage, 'en', selectionState.selectedWord, translationText)
				break
		}
		setTimeout(renderDictPresenceStatus, 0)
	}
}, true)
