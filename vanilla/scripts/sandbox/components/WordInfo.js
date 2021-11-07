import { setTranslation, getTranslation } from '../../dict.js'

const templateHTML = `
<link rel="stylesheet" href="/scripts/sandbox/components/word-info.css">
<div id="info">
	<span class="title">Personal dictionary:</span>
	<span id="originalWord"></span>
	<span class="translation" id="translationEn" contenteditable placeholder="En"></span>
	<span class="translation" id="translationRu" contenteditable placeholder="Ru"></span>
</div>
`

export class WordInfo extends HTMLElement {

	_rendered = false

	render () {
		if (!this._rendered) {

			const dictionaryForm = getTranslation(this._originalLanguage, 'dictionaryForm', this._originalWordSanitized)
			const translationEn = getTranslation(this._originalLanguage, 'en', this._originalWordSanitized)
			const translationRu = getTranslation(this._originalLanguage, 'ru', this._originalWordSanitized)

			this._$originalWord.innerText =
				this._originalWord === dictionaryForm || !dictionaryForm
					? this._originalWord
					: `${this._originalWord} (${dictionaryForm || '?'})`

			this._$translationEn.innerText = translationEn || ''
			this._$translationRu.innerText = translationRu || ''

			this._rendered = true;
		}
	}

	_shadowTree
	_originalLanguage
	_originalWord
	_originalWordSanitized

	connectedCallback () {
		this._shadowTree = this.attachShadow({mode: 'open'});
		this._shadowTree.innerHTML = templateHTML

		this._$originalWord = this._shadowTree.getElementById('originalWord')
		this._$translationEn = this._shadowTree.getElementById('translationEn')
		this._$translationRu = this._shadowTree.getElementById('translationRu')

		this._originalLanguage = this.getAttribute('original-language') || 'de'
		this._originalWord = this.getAttribute('original-word') || ''
		this._originalWordSanitized = this.getAttribute('original-word-sanitizied') || ''

		this._shadowTree.addEventListener('keyup', this.onKeyUp.bind(this))

		this.render();
	}

	onKeyUp (e) {
		if (!this._originalWord) {
			e.preventDefault()
			return
		}
		if (e.target.classList.contains('translation')) {
			const translationText = e.target.innerText
			switch (e.target.id) {
				case 'translationRu':
					setTranslation(this._originalLanguage, 'ru', this._originalWordSanitized, translationText)
					break
				case 'translationEn':
					setTranslation(this._originalLanguage, 'en', this._originalWordSanitized, translationText)
					break
			}
			this.dispatchEvent(new Event("translation-updated"))
		}
	}

	static get observedAttributes () {
		return [ 'original-language', 'original-word', 'original-word-sanitized' ];
	}

	attributeChangedCallback (name, oldValue, newValue) {
		switch (name) {
			case 'original-language':
				this._currentLanguage = newValue
				if (this._rendered) {
					this._rendered = false;
					this.render();
				}
				break
			case 'original-word':
				this._originalWord = newValue
				if (this._rendered) {
					this._rendered = false;
					this.render();
				}
				break
			case 'original-word-sanitized':
				this._originalWordSanitized = newValue
				if (this._rendered) {
					this._rendered = false;
					this.render();
				}
				break
		}
	}

}

try {
	customElements.define('word-info', WordInfo)
} catch (DOMException) {
	// pass
}

export default WordInfo
