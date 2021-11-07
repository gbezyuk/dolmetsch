import { getDict } from './dict.js'
import languagesAvailable from './languagesAvailable.js'

// let currentLanguage = null
const $de = document.getElementById('dict-export')

const renderExport = () => {
	let stringified = "{\n";
	for (let cl of languagesAvailable) {
		stringified += '\n"' + cl.code + '": {\n'
		for (let targetLanguage of ['ru', 'en', 'dictionaryForm']) {
			const dict = getDict(cl.code, targetLanguage)
			stringified += '"' + targetLanguage + '": ' + JSON.stringify(dict, Object.keys(dict).sort(), 2) + ',\n'
		}
		if (stringified.length > 2) {
			stringified = stringified.slice(0, stringified.length - 2) + "\n"
		}
		stringified += "},\n"
	}
	if (stringified.length > 2) {
		stringified = stringified.slice(0, stringified.length - 2) + "\n"
	}
	$de.innerText = stringified + "}"
}

// const $currentTextlanguageSelector = document.getElementById('current-text-language-selector')
// if ($currentTextlanguageSelector) {
// 	$currentTextlanguageSelector.addEventListener('input', () => {
// 		currentLanguage = $currentTextlanguageSelector.value
// 		renderExport()
// 	})
// }

renderExport()
