import languagesAvailable from './languagesAvailable.js'

const primaryNavigationHTML = `
	<a href="/"><h2>Dolmetsch</h2></a>
	<hr>
	<a href="./index.html">about</a>
	<a href="https://github.com/gbezyuk/dolmetsch" target="_blank">GitHub</a>
	<hr>
	<h4>Reader</h4>
	<a href="./reader-demo.html">demo text</a>
	<a href="./reader-own-text.html">own text</a>
	<hr>
	<h4>Dict</h4>
	<a href="./dict-viewer.html">view/edit</a>
	<a href="./dict-export.html">export</a>
`
/* <a href="./dict-review.html">review</a> */

document.getElementById('primary-navigation').innerHTML = primaryNavigationHTML


const availableLanguagesHTML = languagesAvailable.reduce(
	(acc, { code, name }) => acc + `<option value="${code}">${name}</option>`,
	''
)

const $currentTextLanguageSelector = document.getElementById('current-text-language-selector')
if ($currentTextLanguageSelector) {
	$currentTextLanguageSelector.innerHTML = availableLanguagesHTML
	$currentTextLanguageSelector.value = 'de'
}
