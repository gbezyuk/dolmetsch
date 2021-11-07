const rawText =`
Der Maschinenraum war riesig und hatte eine gewölbte Decke wie eine Kathedrale. Der Fusionsreaktor nahm das Zentrum ein. Dort stimmte etwas nicht. Wo sie erwartet hatte, Anzeigen, Abschirmungen und Monitore zu sehen, floss etwas über den Reaktorkern, das ihr vorkam wie eine Schicht Schlamm. Langsam schwebte Julie hinüber, hielt sich aber noch mit einer Hand an der Leiter fest. Der seltsame Geruch wurde stärker.

So etwas wie den Schlamm, der um den Reaktor festgebacken war, hatte sie noch nie gesehen. Durch die Masse zogen sich Schläuche, die an Adern oder Luftröhren erinnerten. Einige Teile pulsierten. Also war es kein Schlamm.

Es lebte.

Ein Auswuchs des Dings drehte sich zu ihr herum. Verglichen mit den Ausmaßen der Masse war es nicht größer als eine Zehe oder ein kleiner Finger. Es war Kapitän Darrens Kopf.

»Hilf mir«, sagte er.
`

// console.log(rawText)

function* variativeSplit (text, separators) {
	if (!separators) {
		yield text
		return
	}
	if (!separators.length) {
		for (let sample in variativeSplit(text, [separators])) {
			yield sample
		}
		return
	}
	let sample = ''
	let newChunkStartIndex = 0
	let i = 0
	for (i = 0; i < text.length; i++) {
		const char = text[i]
		sample += char
		if (separators.find(separator => sample.endsWith(separator))) {
			yield text.slice(newChunkStartIndex, i + 1)
			sample = ''
			newChunkStartIndex = i + 1
		}
	}
	if (newChunkStartIndex < i) {
		yield text.slice(newChunkStartIndex)
	}
}

function* parseRawTextParagraphs (rawText) {
	for (let paragraph of rawText.split('\n').filter(s => s.length > 0)) {
		yield paragraph
	}
}

function* parseRawTextSentences (rawText) {
	for (let paragraph of [...variativeSplit(rawText, ['. ', '? ', '! ', '.\n', '?\n', '!\n', '«, '])].filter(s => s.length > 0)) {
		yield paragraph
	}
}

function* parseRawTextWords (sentence) {
	for (let word of [...variativeSplit(sentence, [' ',])]) {
		yield word
	}
}


function *parseRawText (rawText) {
	for (let paragraph of parseRawTextParagraphs(rawText)) {
		const p = []
		for (let sentence of parseRawTextSentences(paragraph)) {
			// for (let word of parseRawTextWords(sentence)) {
			// 	yield word
			// }
			p.push([...parseRawTextWords(sentence)])
		}
		// yield '\n'
		yield(p)
	}
}

// for (let word of parseRawText(rawText)) {
// 	console.log(word)
// }

// const parsedText = [...parseRawText(rawText)]
// console.log(parsedText)

const $text = document.getElementById('text')

for (let p of parseRawText(rawText)) {
	const $p = document.createElement('p')
	$p.className = 'paragraph'
	for (let s of p) {
		const $s = document.createElement('span')
		$s.className = 'sentence'
		for (let w of s) {
			const wTrimmed = w.trimRight(' ')
			const $w = document.createElement('span')
			$w.className = 'word'

			const $ww = document.createElement('span')
			$ww.innerText = wTrimmed
			$ww.className = 'word-proper'
			$w.appendChild($ww)

			if (wTrimmed.length < w.length) {
				const $s = document.createElement('span')
				$s.innerText = w.slice(w.length - (w.length - wTrimmed.length))
				$s.className = 'whitespaces'
				$w.appendChild($s)
			}
			$s.appendChild($w)
		}
		$p.appendChild($s)
	}
	$text.appendChild($p)
}

function sanitizeWord (word) {
	return word.replace(/\W/g, '').toLocaleLowerCase()
}

function fixViewStyleClasses () {
	for (let $paragraph of $text.childNodes) {
		$paragraph.classList.toggle('selected', $paragraph === $selectedParagraph)
		for (let $sentence of $paragraph.childNodes) {
			$sentence.classList.toggle('selected', $sentence === $selectedSentence)
			for (let $word of $sentence.childNodes) {
				$word.classList.toggle('selected', $word === $selectedWord)
				$word.classList.toggle('occurence', sanitizeWord($word.innerText) === selectedWordSanitized)
			}
		}
	}
}

let $selectedParagraph, $selectedSentence, $selectedWord, selectedWordSanitized

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('word-proper')) {
		e.preventDefault()
		e.stopPropagation()
		selectedWordSanitized = sanitizeWord(e.target.innerText)
		if ($selectedWord === e.target) {
			selectedWordSanitized = ''
			$selectedWord = null
			$selectedSentence = null
			$selectedParagraph = null
		} else {
			$selectedWord = e.target.parentNode
			$selectedSentence = $selectedWord.parentNode
			$selectedParagraph = $selectedSentence.parentNode
		}
		fixViewStyleClasses()
	}
})
