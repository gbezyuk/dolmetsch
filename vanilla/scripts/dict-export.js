import { getDict } from './dict.js'

let currentLanguage = 'de'
const $de = document.getElementById('dict-export')

const renderExport = () => {
	let stringified = ''
	for (let targetLanguage of ['ru', 'en', 'dictionaryForm']) {
		const dict = getDict(currentLanguage, targetLanguage)
		stringified += targetLanguage + ':\n' + JSON.stringify(dict, Object.keys(dict).sort(), 2) + '\n'
	}
	$de.innerText = stringified
}

const $currentTextlanguageSelector = document.getElementById('current-text-language-selector')
if ($currentTextlanguageSelector) {
	$currentTextlanguageSelector.addEventListener('input', () => {
		currentLanguage = $currentTextlanguageSelector.value
		renderExport()
	})
}

renderExport()
