export default class ChineseCharacter extends HTMLElement {

	_rendered = false

	_lastAudioPlayed = -1

	constructor () {
		super()
	}

	render (force=false) {
		if (this._rendered && !force) {
			return
		}
		this.innerHTML = `<div class="
			chinese-character
			${ this.getAttribute('radical') === this.getAttribute('hanzi') ? 'radical' : '' }
			${ !!this.getAttribute('audios') ? 'with-audio' : '' }
		">
			<span class="id">${this.getAttribute('cid')}</span>
			<span class="hanzi">${this.getAttribute('hanzi')}</span>
			<span class="pinyin">${this.getAttribute('pinyin')}</span>
			<span class="english">${this.getAttribute('english')}</span>
			${ this.getAttribute('radical') ? `<span class="radical">${this.getAttribute('radical')}</span>` : '' }
			${ this.getAttribute('composition') ? `<span class="composition">${this.getAttribute('composition')}</span>` : '' }
			${ this.getAttribute('components') ? `<span class="components">${this.getAttribute('components')}</span>` : '' }
		</div>`
		this._rendered = true
	}

	connectedCallback () {
		// "data:application/json,".length === 22
		let audios = this.getAttribute('audios')
		if (audios) {
			audios = JSON.parse(atob(this.getAttribute('audios').slice(22)))
			this.addEventListener('click', () => {
				this._lastAudioPlayed +=1
				if (this._lastAudioPlayed >= audios.length) {
					this._lastAudioPlayed = 0
				}
				const audio = new Audio('../data/audio/parsed/' + audios[this._lastAudioPlayed]);
				audio.play();
			})
		}
		this.render()
	}

	attributeChangedCallback (name, oldValue, newValue) {
		this._rendered = false
		this.render()
	}

}

if (!window.customElements.get('chinese-character')) {
	window.customElements.define('chinese-character', ChineseCharacter)
}
