export const selected = {
	word: '',
	range: undefined,
	wordInfo: undefined,
	phraseIndex: -1
}

export const getPreviousWord = (range) => {
	let end = range.startOffset
	let start = end - 1
	let sample, found
	const text = range.commonAncestorContainer.textContent //.trim()
	while (start >= 0) {
		sample = text.slice(start, end)
		found = !!translateHanzi(sample)?.audio

		if (found) {
			break
		}

		for (let altEnd = start + 1; altEnd < end; altEnd++) {
			sample = text.slice(start, altEnd)
			found = !!translateHanzi(sample)?.audio
			if (found) {
				end = altEnd
				break
			}
		}

		if (found) {
			break
		}

		start--
	}
	if (found) {
		return translateHanzi(sample)
	}
}

export const findWordAudio = (index) => {
	const previous = getPreviousWord(selected.range)
	const timerange = { start: previous.audio[selectedPhraseIndex].end || 0, end: Infinity }
	play(timerange)
}
