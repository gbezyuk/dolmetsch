import { getTranslation, setTranslation, getKeys } from './dict.js'

const $dictTBody = document.getElementById('dictTBody')

let currentLanguage = 'de'

const renderDict = () => {
	const keys = getKeys(currentLanguage)
	$dictTBody.innerHTML = keys.map(k => `<tr>
		<td>${k}</td>
		<td class="translation dictionary-form" contenteditable>${ getTranslation(currentLanguage, 'dictionaryForm', k) || ''}</td>
		<td class="translation translation-ru" contenteditable>${ getTranslation(currentLanguage, 'ru', k) || ''}</td>
		<td class="translation translation-en" contenteditable>${ getTranslation(currentLanguage, 'en', k) || ''}</td>
	</tr>`).join('')
}

document.body.addEventListener('keyup', (e) => {
	if (e.target.classList.contains('translation')) {
		const selectedWord = e.target.parentNode.querySelector('td:first-child').innerText
		const translationText = e.target.innerText
		if (e.target.classList.contains('translation-ru')) {
			setTranslation(currentLanguage, 'ru', selectedWord, translationText)
		}
		if (e.target.classList.contains('translation-en')) {
			setTranslation(currentLanguage, 'en', selectedWord, translationText)
		}
		if (e.target.classList.contains('dictionary-form')) {
			setTranslation(currentLanguage, 'dictionaryForm', selectedWord, translationText)
		}
	}
}, true)

renderDict()

const $currentTextlanguageSelector = document.getElementById('current-text-language-selector')
if ($currentTextlanguageSelector) {
	$currentTextlanguageSelector.addEventListener('input', () => {
		currentLanguage = $currentTextlanguageSelector.value
		renderDict()
	})
}
