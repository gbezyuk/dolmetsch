const findPreposition = (wholeText, preposition, i) => {
	const textRemainder = wholeText.slice(i)
	const start = textRemainder.indexOf(preposition)
	if (start === -1) {
		return {
			start: -1,
			end: -1
		}
	} else {
		return {
			start: start + i,
			end: start + i + preposition.length
		}
	}
}

const selectPhraseVerb = (verb, preposition) => {
	const s = document.getSelection()
	if (s.rangeCount === 1) {
		const r1 = s.getRangeAt(0)
		const selectedText = r1.toString().toLocaleLowerCase()
		verb = verb.toLocaleLowerCase()
		if (selectedText.trim().endsWith(verb)) {
			const r2 = r1.cloneRange()
			const node = r2.endContainer
			const wholeText = node.wholeText
			const { start, end } = findPreposition(wholeText, preposition, r1.endOffset + 1)
			if (start !== -1) {
				r2.setStart(r2.endContainer, start)
				r2.setEnd(r2.endContainer, end)
				s.addRange(r2)
				return true
			} else {
				// no preposition found
				return false
			}
		} else {
			// no verb selected
			return false
		}
	} else {
		// no selection, or multiselection already, doing nothing
		return false
	}
}

const selectionToString = (s = null) => {
	if (s === null) {
		s = document.getSelection()
	}
	const entries = []
	for (let i = 0; i < s.rangeCount; i++) {
		entries.push(s.getRangeAt(i).toString())
	}
	return entries.join(' ')
}

// selectPhraseVerb ('read', 'in')
