export const punctuation = ".?!,:;()\n"
export const sentenceDelimiters = ['. ', '? ', '! ', '.\n', '?\n', '!\n', '«, ']

export function* gVariativeSplit (text, separators) {
	if (!separators) {
		yield text
		return
	}
	if (!separators.length) {
		for (let sample in gVariativeSplit(text, [separators])) {
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

export function* gParseRawTextParagraphs (rawText) {
	for (let paragraph of rawText.split('\n').filter(s => s.length > 0)) {
		yield paragraph
	}
}

export function* gParseRawTextSentences (rawText) {
	for (let paragraph of [
		...gVariativeSplit(rawText, sentenceDelimiters
	)].filter(s => s.length > 0)) {
		yield paragraph
	}
}

export function* gParseRawTextWords (sentence) {
	for (let word of [...gVariativeSplit(sentence, [' ',])]) {
		yield word
	}
}

export function* gParseRawText (rawText) {
	for (let paragraph of gParseRawTextParagraphs(rawText)) {
		const p = []
		for (let sentence of gParseRawTextSentences(paragraph)) {
			p.push([...gParseRawTextWords(sentence)])
		}
		yield p
	}
}


export default gParseRawText
