const $dictTBody = document.getElementById('dictTBody')
import { translate, translations, setTranslation } from './dict.js'

const _setUnion = (setA, setB) => {
	let _union = new Set(setA)
	for (let elem of setB) {
		_union.add(elem)
	}
	return _union
}

const renderDict = () => {
	const keys = [..._setUnion(new Set(Object.keys(translations.en)), new Set(Object.keys(translations.ru)))]
	keys.sort()
	$dictTBody.innerHTML = keys.map(k => `<tr>
		<td>${k}</td>
		<td class="translation dictionary-form" contenteditable>${translations.dictionaryForm[k] || ''}</td>
		<td class="translation translation-ru" contenteditable>${translations.ru[k] || ''}</td>
		<td class="translation translation-en" contenteditable>${translations.en[k] || ''}</td>
	</tr>`).join('')
}

renderDict()

document.body.addEventListener('keyup', (e) => {
	if (e.target.classList.contains('translation')) {
		const selectedWord = e.target.parentNode.querySelector('td:first-child').innerText
		const translationText = e.target.innerText
		if (e.target.classList.contains('translation-ru')) {
			setTranslation('ru', selectedWord, translationText)
		}
		if (e.target.classList.contains('translation-en')) {
			setTranslation('en', selectedWord, translationText)
		}
		if (e.target.classList.contains('dictionary-form')) {
			setTranslation('dictionaryForm', selectedWord, translationText)
		}
	}
}, true)
