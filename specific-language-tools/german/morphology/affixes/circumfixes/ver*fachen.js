// see https://en.wiktionary.org/wiki/ver-_-fachen

export const exceptions = [
]

export function test (word) {
	word = word.toLowerCase()
	return word.startsWith('ver') && word.endsWith('fachen') && !exceptions.includes(word)
}

export function unwrap (word, unsafe) {
	if (unsafe || isCircumfixed(word)) {
		return word.slice(3, word.length - 6)
	}
}

export function translate (word, translator) {
	if (isCircumfixed (word)) {
		return "multiply by " + translator(unwrap(word, true))
	}
}

export function annotate (word) {
	if (isCircumfixed (word)) {
		return "multiply by " + unwrap(word, true)
	}
}
