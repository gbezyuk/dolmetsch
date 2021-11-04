// see https://en.wikipedia.org/wiki/German_verbs#German_prefixes

const prefix = 'ab'
const prefixLength = prefix.length
const prefixTranslation = prefix
const prefixMeaning = prefix

export const exceptions = [
]

export function test (word) {
	word = word.toLowerCase()
	return word.startsWith(prefix) && !exceptions.includes(word)
}

export function unwrap (word, unsafe) {
	if (unsafe || test(word)) {
		return word.slice(prefixLength, word.length)
	}
}

export function translate (word, translator) {
	if (test (word)) {
		return prefixTranslation + " + " + translator(unwrap(word, true))
	}
}

export function annotate (word) {
	if (test (word)) {
		return prefixMeaning + " + " + unwrap(word, true)
	}
}
