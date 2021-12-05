export default class ChineseWord extends HTMLElement {

	_rendered = false

	constructor () {
		super()
	}

	render (force=false) {
		if (this._rendered && !force) {
			return
		}
		this.innerHTML = `<div class="chinese-word">
			<span class="hanzi">${this.getAttribute('hanzi')}</span>
			<span class="pinyin">${this.getAttribute('pinyin')}</span>
			<span class="english">${this.getAttribute('english')}</span>
		</div>`
		this._rendered = true
	}

	connectedCallback () {
		this.render()
	}

	attributeChangedCallback (name, oldValue, newValue) {
		this._rendered = false
		this.render()
	}

}

if (!window.customElements.get('chinese-word')) {
	window.customElements.define('chinese-word', ChineseWord)
}
