import { fillTextNode, initReader } from "@utils/reader/dom-interaction.js"
import { isTranslated } from '@utils/dict/dict.js'

const templateHTML = `
<link rel="stylesheet" href="/reader-text.css">
<div id="text"></div>
`

export class ReaderText extends HTMLElement {

	_rendered = false

	render () {
		if (!this._rendered) {
			fillTextNode(this._shadowTree.getElementById('text'), this.getAttribute('raw-text') || "")
			this._renderDictPresenceStatus()
			this._rendered = true;
		}
	}

	_selectionState
	_shadowTree
	_currentLanguage

	connectedCallback () {
		this._shadowTree = this.attachShadow({mode: 'open'});
		// this._shadowTree.append(document.getElementById('reader-text-template').content.cloneNode(true));
		this._shadowTree.innerHTML = templateHTML
		this._selectionState = initReader(this._shadowTree.getElementById('text'), this._onSelectionStateChange.bind(this))
		this._currentLanguage = this.getAttribute('original-language') || 'de'
		this.render();

		this.addEventListener('vocab-updated', this._onVocabUpdated.bind(this))
	}

	static get observedAttributes () {
		return [ 'raw-text', 'original-language' ];
	}

	attributeChangedCallback (name, oldValue, newValue) {
		switch (name) {
			case 'raw-text':
				if (this._rendered) {
					this._rendered = false;
					this.render();
				}
				break
			case 'original-language':
				this._currentLanguage = newValue
				if (this._rendered) {
					this._renderDictPresenceStatus()
				}
				break
		}
	}

	_onSelectionStateChange (selectionState) {
		this._selectionState = selectionState
		const event = new Event("selection-change");
		event.details = {
			wordRaw: selectionState.selectedWord,
			wordSanitized: selectionState.selectedWordSanitized,
		}
		this.dispatchEvent(event);
	}

	_onVocabUpdated (e) {
		e.stopPropagation()
		this._renderDictPresenceStatus()
	}

	_renderDictPresenceStatus () {
		[...this._shadowTree.getElementById('text').getElementsByClassName('word-proper')].map($w => {
			const w = $w.innerText.toLowerCase()
			$w.classList.toggle('translated', isTranslated(this._currentLanguage, w))
		})
	}

}

// try {
// 	customElements.define('reader-text', ReaderText)
// } catch (DOMException) {
// 	// pass
// }

export default ReaderText
