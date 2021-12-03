import { findWordAudio } from './ranging.js'
import { words } from './data.js'

export let stopAt = Infinity

export const $audio = document.getElementById('audio')

export const stopPlayback = () => {
	$audio.pause()
	Array.from(document.getElementsByClassName('stop')).map(e => {
		e.classList.toggle('stop', false)
		e.classList.toggle('play', true)
	})
}

export const play = (timerange) => {
	if (!timerange || !timerange.start) {
		return false
	}
	$audio.pause()
	$audio.currentTime = timerange.start
	stopAt = timerange.end
	$audio.play()
	return true
}

export const playText = (index) => {
	return play(textAudioPositions[index])
}

export const selectLongestSample = (audio) => {
	let maxDurationSoFar = -1
	let maxIndex = -1
	let result = undefined
	Object.keys(audio).map(
		(key) => {
			const sample = audio[key]
			const duration = sample.end - sample.start
			if (duration > maxDurationSoFar) {
				maxDurationSoFar = duration
				maxIndex = key
				result = sample
			}
		}
	)
	return result
}

export const playWord = (index) => {
	try {
		return play(selectLongestSample(words[index]?.audio))
	} catch (TypeError) {
		return false
	}
}


export const initAudioHandlers = () => {
	$audio.addEventListener('timeupdate', () => {
		if ($audio.currentTime > stopAt) {
			stopPlayback()
		}
	})

	document.addEventListener('keydown', e => {
		switch (e.code) {
			case "Escape":
				stopPlayback()
				break;
			case "Space":
				console.log($audio.currentTime)
				break
		}
	})

	document.addEventListener('click', e => {
		if (e.target.classList.contains('stop')) {
			stopPlayback()
		}
	})

	document.getElementById('text').addEventListener('click', e => {
		const $el = e.target
		if ($el.classList.contains('play')) {
			stopPlayback()
			if (playText($el.parentElement.dataset.index)) {
				setTimeout(() => {
					$el.classList.toggle('play', false)
					$el.classList.toggle('stop', true)
				})
			}
		}
	})

	document.getElementById('pinyin').parentElement.addEventListener('click', e => {
		const $el = e.target
		if ($el.classList.contains('play')) {
			stopPlayback()
			const index = $el.parentElement.dataset.index
			if (playWord(index)) {
				setTimeout(() => {
					$el.classList.toggle('play', false)
					$el.classList.toggle('stop', true)
				})
			} else {
				// findWordAudio(index)
			}
		}
	})
}
