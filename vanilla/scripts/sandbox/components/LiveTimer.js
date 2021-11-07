import TimeFormatted from "./TimeFormatted.js"

export class LiveTimer extends HTMLElement {

	render () {
		if (!this._rendered) {
			this.innerHTML = `<time-formatted datetime="${this._now}" hour="numeric" minute="numeric" second="numeric"></time-formatted>`
			this._rendered = true;
		}
	}

	_tickHandle
	_rendered = false
	_now

	connectedCallback () {
		this._now = new Date()
		this._tickHandle = setInterval(this.emitTick.bind(this), 1000)
		this.render();
	}

	static get observedAttributes () {
		return [];
	}

	emitTick () {
		this._now = new Date()
		const event = new Event("tick");
		event.details = this._now.getTime()
		this._rendered = false;
		this.render();
  		this.dispatchEvent(event);
	}

	attributeChangedCallback (name, oldValue, newValue) {
		this._rendered = false;
		this.render();
	}

}

try {
	customElements.define('live-timer', LiveTimer)
} catch (DOMException) {
	// pass
}

export default LiveTimer
