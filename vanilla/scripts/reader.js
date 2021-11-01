import initText from "./reader/initText.js"
import { translate, translations, setTranslation } from './dict.js'
import text from './reader/text.js'

const $originalWord = document.getElementById('originalWord')
const $occurences = document.getElementById('occurences')
const $translationEn = document.getElementById('translationEn')
const $translationRu = document.getElementById('translationRu')
const $text = document.getElementById('text')
let selectedWord = ''
let translationEn = ''
let translationRu = ''
let occurences = 0

const handleWordClick = (word) => {
	if (selectedWord === word) {
		selectedWord = ''
	} else {
		selectedWord = word
	}
	updateWordSelectionIndication()
	checkTranslations()
	updateInfo()
	// requestYandexTranslation()
}

const updateWordSelectionIndication = () => {
	occurences = 0;
	[...document.getElementsByClassName('word')].map($w => {
		const selected = $w.innerText.toLowerCase() === selectedWord.toLowerCase()
		if (selected) {
			occurences++
		}
		$w.classList.toggle('selected', selected)
	})
}

const renderDictPresenceStatus = () => {
	[...document.getElementsByClassName('word')].map($w => {
		const w = $w.innerText.toLowerCase()
		$w.classList.toggle('translated', w in translations.en || w in translations.ru)
	})
}

const updateInfo = () => {
	$originalWord.innerText = selectedWord
	$occurences.innerText = occurences
	$translationEn.innerText = translationEn || ''
	$translationRu.innerText = translationRu || ''
}

document.body.addEventListener('click', (e) => {
	if (e.target.classList.contains('word')) {
		handleWordClick(e.target.innerText)
	}
})

document.body.addEventListener('keyup', (e) => {
	if (!selectedWord) {
		return
	}
	if (e.target.classList.contains('translation')) {
		const translationText = e.target.innerText
		switch (e.target.id) {
			case 'translationRu':
				setTranslation('ru', selectedWord, translationText)
				break
			case 'translationEn':
				setTranslation('en', selectedWord, translationText)
				break
		}
		setTimeout(renderDictPresenceStatus, 0)
	}
}, true)

initText($text, text)

const checkTranslations = () => {
	translationEn = translate(translations.en, selectedWord)
	translationRu = translate(translations.ru, selectedWord)
}

renderDictPresenceStatus()