import { gParseRawText, punctuation } from './text-parsing.js'
import { sequence } from './func-utils.js'
import { isNumber, sanitizeWord, smartTrimLeft, smartTrimRight } from './str-utils.js'

export function fillTextNode ($textNode, rawText) {
	for (let p of gParseRawText(rawText)) {
		const $p = document.createElement('p')
		$p.className = 'paragraph'
		for (let s of p) {
			const $s = document.createElement('span')
			$s.className = 'sentence'
			for (let w of s) {
				const $w = document.createElement('span')
				$w.className = 'word'
				let $sp, $pt1, $pt2
				let $wp = document.createElement('span')

				const wTrimmed1 = smartTrimLeft(w, punctuation)
				if (wTrimmed1.length < w.length) {
					$pt1 = document.createElement('punctuation')
					$pt1.innerText = w.slice(0, w.length - wTrimmed1.length)
					$pt1.className = 'punctuation'
				}
				const wTrimmed2 = wTrimmed1.trimRight(' ')

				if (wTrimmed2.length < wTrimmed1.length) {
					$sp = document.createElement('span')
					$sp.innerText = wTrimmed1.slice(wTrimmed1.length - (wTrimmed1.length - wTrimmed2.length))
					$sp.className = 'whitespaces'
				}

				const wTrimmed3 = smartTrimRight(wTrimmed2, punctuation)

				if (wTrimmed3.length < wTrimmed2.length) {
					$pt2 = document.createElement('span')
					$pt2.innerText = wTrimmed2.slice(wTrimmed2.length - (wTrimmed2.length - wTrimmed3.length))
					$pt2.className = 'punctuation'
				}

				$wp.innerText = wTrimmed3
				const numerical = isNumber(wTrimmed3)
				const sanitized = sanitizeWord(wTrimmed3)
				const lowercased = wTrimmed3.toLocaleLowerCase()
				const isWeird = lowercased !== sanitized // && !parseInt(wTrimmed2)
				if (isWeird) {
					console.log('weird', wTrimmed3, lowercased, sanitized)
				}
				$wp.className =
					numerical
						? 'word-number'
						: !isWeird
							? 'word-proper'
							: 'word-weird'

				if ($pt1) {
					$w.appendChild($pt1)
				}
				$w.appendChild($wp)
				if ($pt2) {
					$w.appendChild($pt2)
				}
				if ($sp) {
					$w.appendChild($sp)
				}

				$s.appendChild($w)
			}
			$p.appendChild($s)
		}
		$textNode.appendChild($p)
	}
}

export function fixViewStyleClasses (selectionState) {
	for (let $paragraph of selectionState.$textNode.childNodes) {
		$paragraph.classList.toggle('selected',
			$paragraph === selectionState.$selectedParagraph
		)
		for (let $sentence of $paragraph.childNodes) {
			$sentence.classList.toggle('selected',
				$sentence === selectionState.$selectedSentence
			)
			for (let $word of $sentence.childNodes) {
				const $wp = $word.getElementsByClassName('word-proper')[0]
				if (!$wp) {
					continue
				}
				$word.classList.toggle('selected',
					$word === selectionState.$selectedWord
				)
				$word.classList.toggle('occurence',
					sanitizeWord($wp.innerText) === selectionState.selectedWordSanitized
				)
			}
		}
	}
}

export function wordClickHandler (e, selectionState, afterStateChange) {
	if (e.target.classList.contains('word-proper')) {
		e.preventDefault()
		e.stopPropagation()
		const selectedWordSanitized = sanitizeWord(e.target.innerText)
		if (selectionState.$selectedWord === e.target) {
			selectionState.selectedWord = ''
			selectionState.selectedWordSanitized = ''
			selectionState.$selectedWord = null
			selectionState.$selectedSentence = null
			selectionState.$selectedParagraph = null
		} else {
			selectionState.selectedWord = e.target.innerText
			selectionState.selectedWordSanitized = selectedWordSanitized
			selectionState.$selectedWord = e.target.parentNode
			selectionState.$selectedSentence = selectionState.$selectedWord.parentNode
			selectionState.$selectedParagraph = selectionState.$selectedSentence.parentNode
		}
		afterStateChange(selectionState)
	}
}

export function registerWordClickHandler ($textNode, selectionState, afterStateChange) {
	$textNode.addEventListener('click', (e) => wordClickHandler(e, selectionState, afterStateChange))
}

export function newSelectionState ($textNode) {
	return {
		$textNode: $textNode,

		$selectedParagraph: null,
		$selectedSentence: null,
		$selectedWord: null,

		selectedWord: "",
		selectedWordSanitized: "",
	}
}

export function initReader ($textNode, onSelectionStateChange) {
	const selectionState = newSelectionState($textNode)
	registerWordClickHandler(
		$textNode,
		selectionState,
		sequence(fixViewStyleClasses, onSelectionStateChange)
	)
	return selectionState
}

export default initReader
