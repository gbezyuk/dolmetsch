import initText from "./reader/initText.js"
import { getTranslation, isTranslated, setTranslation } from './dict.js'
import { requestLocalTranslation } from './local-dictionary.js'
import text from './reader/text.js'
import { test as morphologyTest } from './morphology.js'

const $originalWord = document.getElementById('originalWord')
const $dictionaryForm = document.getElementById('dictionaryForm')
// const $occurences = document.getElementById('occurences')
const $translationEn = document.getElementById('translationEn')
const $translationRu = document.getElementById('translationRu')
const $text = document.getElementById('text')
const $remoteDictInfo = document.getElementById('remote-dict-info')

let currentLanguage = 'de'
let selectedWord = ''
let dictionaryForm = ''
let translationEn = ''
let translationRu = ''
// let occurences = 0

let remoteDictInfo = null

let queryLocalDictionary = false
const $defaultTextCopyrightNote = document.getElementById('default-text-copyright-note')

const handleWordClick = (word) => {
	if (selectedWord === word) {
		selectedWord = ''
	} else {
		selectedWord = word
		resetRemoteDictInfo()
		if (queryLocalDictionary) {
			requestLocalTranslation(selectedWord)
				.then(updateRemoteDictInfo)
				.catch(_ => {})
		}
		performMorphologyTest()
	}
	updateWordSelectionIndication()
	checkTranslations()
	updateInfo()
}

const resetRemoteDictInfo = () => {
	remoteDictInfo = null
	$remoteDictInfo.innerText = ''
}

const updateRemoteDictInfo = (rdi) => {
	remoteDictInfo = rdi
	$remoteDictInfo.innerText = JSON.stringify(rdi, null, 2)
}

const performMorphologyTest = () => {
	const results = morphologyTest(selectedWord)
	for (let a of results.analysis) {
		if (Array.isArray(a) && a.length > 0) {
			console.log('the dictionary form may be ' + a[1])
			if (queryLocalDictionary) {
				requestLocalTranslation(a[1]).then(response => {
					if (remoteDictInfo === null) {
						updateRemoteDictInfo(response)
					}
				})
			}
		}
	}
}

const updateWordSelectionIndication = () => {
	// occurences = 0;
	[...document.getElementsByClassName('word')].map($w => {
		const selected = $w.innerText.toLowerCase() === selectedWord.toLowerCase()
		// if (selected) {
		// 	occurences++
		// }
		$w.classList.toggle('selected', selected)
	})
}

const renderDictPresenceStatus = () => {
	[...document.getElementsByClassName('word')].map($w => {
		const w = $w.innerText.toLowerCase()
		$w.classList.toggle('translated', isTranslated(currentLanguage, w))
	})
}

const updateInfo = () => {
	$originalWord.innerText =
		selectedWord === dictionaryForm || !dictionaryForm
			? selectedWord
			: `${selectedWord} (${dictionaryForm || '?'})`
	// $dictionaryForm.innerText = dictionaryForm
	// $occurences.innerText = occurences
	$translationEn.innerText = translationEn || ''
	$translationRu.innerText = translationRu || ''
}

const checkTranslations = () => {
	translationEn = getTranslation(currentLanguage, 'en', selectedWord)
	translationRu = getTranslation(currentLanguage, 'ru', selectedWord)
	dictionaryForm = getTranslation(currentLanguage, 'dictionaryForm', selectedWord)
}

const putOwnText = (text) => {
	initText($text, text)
	setTimeout(renderDictPresenceStatus, 0)
	$defaultTextCopyrightNote && ($defaultTextCopyrightNote.style.display = 'none')
}

export function initReaderPage (useDemoText) {

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
					setTranslation(currentLanguage, 'ru', selectedWord, translationText)
					break
				case 'translationEn':
					setTranslation(currentLanguage, 'en', selectedWord, translationText)
					break
			}
			setTimeout(renderDictPresenceStatus, 0)
		}
	}, true)

	document.getElementById('remote-dict-info-visibility-toggler').addEventListener('click', (event) => {
		queryLocalDictionary = !queryLocalDictionary
		event.currentTarget.parentNode.classList.toggle('visible', queryLocalDictionary)
		if (queryLocalDictionary) {
			requestLocalTranslation(selectedWord)
				.then(updateRemoteDictInfo)
				.catch(_ => {})
		}
	})

	if (useDemoText) {
		initText($text, text)
		renderDictPresenceStatus()
	}

	const $ownTextButton = document.getElementById('put-own-text-button')
	const $ownTextInput = document.getElementById('put-own-text-input')
	$ownTextButton?.addEventListener('click', () => {
		if ($ownTextInput) {
			putOwnText($ownTextInput.value)
			$ownTextInput.value = ''
		} else {
			putOwnText(prompt('copy-paste your text here; yep, it may be rather large'))
		}
	})

	window.putOwnText = putOwnText

	const $currentTextlanguageSelector = document.getElementById('current-text-language-selector')
	if ($currentTextlanguageSelector) {
		currentLanguage = $currentTextlanguageSelector.value
		$currentTextlanguageSelector.addEventListener('input', () => {
			currentLanguage = $currentTextlanguageSelector.value
			renderDictPresenceStatus()
			checkTranslations()
			updateInfo()
		})
	}
}


export default initReaderPage
