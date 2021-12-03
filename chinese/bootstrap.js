import { textAudioPositionsSlow, words } from './data.js'
import { play, initAudioHandlers, playWord, playText, stopPlayback } from './audio.js'
import { selected } from './ranging.js'

initAudioHandlers()

const textAudioPositions = textAudioPositionsSlow

const selection2text = (selection) => {
	if (selection.isCollapsed) {
		return ''
	}
	const range = selection.getRangeAt(0)
	return range2text(range)
}

const range2text = (range) => {
	return range.commonAncestorContainer.textContent.slice(
		range.startOffset,
		range.endOffset
	)
}

const findFirstAndLastWords = (range) => {
	let start = range.startOffset, end = range.endOffset
	if (end <= start) {
		return {
			firstWord: '',
			lastWord: '',
		}
	}
	const text = range.commonAncestorContainer.textContent
	let firstWordStart = start, firstWordEnd, firstWord
	let foundFirst = false

	for (firstWordStart = Math.max(0, start - 1); firstWordStart <= end; firstWordStart++) {
		for (firstWordEnd = firstWordStart + 1; firstWordEnd <= end; firstWordEnd++) {
			firstWord = text.slice(firstWordStart, firstWordEnd)
			if (translateHanzi(firstWord)) {
				foundFirst = true
				break
			}
		}
		if (foundFirst) {
			break
		}
	}

	let lastWordStart, lastWordEnd = range.endOffset, lastWord
	let foundLast = false

	for (lastWordEnd = end + 1; lastWordEnd >= start; lastWordEnd++) {
		for (lastWordStart = lastWordEnd - 1; lastWordStart >= start; lastWordStart--) {
			lastWord = text.slice(lastWordStart, lastWordEnd)
			if (translateHanzi(lastWord)) {
				foundLast = true
				break
			}
		}
		if (foundLast) {
			break
		}
	}

	// TODO: handle edge cases

	// if ((firstWord.length === 1 && firstWordStart === start - 1) ||
	// 	(lastWord.length === 1 && lastWordEnd === end + 1)
	// ) {
	// 	if (firstWord.length === 1 && firstWordStart === start - 1) {
	// 		range.startOffset += 1
	// 	}
	// 	if (lastWord.length === 1 && lastWordEnd === end + 1) {
	// 		range.endOffset -= 1
	// 	}
	// 	return findFirstAndLastWords(range)
	// }

	return {
		firstWord,
		lastWord,
	}
}

document.addEventListener('selectionchange', () => {
	const selection = document.getSelection()
	selected.word = selection2text(selection)
	if (selected.word) {
		selected.range = selection.getRangeAt(0)
		selected.phraseIndex = selected.range.commonAncestorContainer.parentElement.dataset.index
		selected.wordInfo = translateHanzi(selected.word)
		if (selected.wordInfo) {
			if (selected.wordInfo.audio[selected.phraseIndex]) {
				stopPlayback()
				play(selected.wordInfo.audio[selected.phraseIndex])
			}
		} else {
			const { firstWord, lastWord } = findFirstAndLastWords(selected.range)
			const fw = translateHanzi(firstWord)
			const lw = translateHanzi(lastWord)
			const timerange = {
				start: (fw && fw.audio && fw.audio[selected.phraseIndex] && fw.audio[selected.phraseIndex].start) || textAudioPositions[0].start,
				end: (lw && lw.audio && lw.audio[selected.phraseIndex] && lw.audio[selected.phraseIndex].end) || textAudioPositions[textAudioPositions.length - 1].end,
			}
			stopPlayback()
			play(timerange)
		}
	} else {
		selected.range = selected.wordInfo = undefined
	}
	rerenderTranslation()
})

const rerenderTranslation = () => {
	if (!selected.word || !selected.wordInfo || !selected.wordInfo.translations) {
		return
	}
	const translations = selected.wordInfo.translations
	const transcriptions = selected.wordInfo
	document.getElementById('hanzi').innerText = selected.word
	document.getElementById('pinyin').innerText = transcriptions.pinyin
	document.getElementById('pinyin').parentElement.dataset.index = hanziIndex[selected.word]
	Object.keys(translations).map(
		language =>
		document.getElementById(language).innerText = translations[language]
	)
}

const generateDictionaryIndex = (dictionary, lookup) => {
	return dictionary.reduce(
		(index, entry, i) => {
			index[lookup(entry)] = i
			return index
		},
		{}
	)
}

const hanziIndex = generateDictionaryIndex(words, (e => e.hanzi.simplified))
const translateHanzi = (hanzi) => words[hanziIndex[hanzi]]
