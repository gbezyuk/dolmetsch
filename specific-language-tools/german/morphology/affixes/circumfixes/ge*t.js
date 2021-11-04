// see https://en.wiktionary.org/wiki/ge-_-t

export const exceptions = [
]

export function test (word) {
	word = word.toLowerCase()
	return word.startsWith('ge') && word.endsWith('t') && !exceptions.includes(word)
}

export function unwrap (word, unsafe) {
	if (unsafe || test(word)) {
		return word.slice(2, word.length - 1)
	}
}

export function translate (word, translator) {
	if (test (word)) {
		return "past participle form of " + translator(unwrap(word, true))
	}
}

export function annotate (word) {
	if (test (word)) {
		return "past participle form of " + unwrap(word, true)
	}
}
