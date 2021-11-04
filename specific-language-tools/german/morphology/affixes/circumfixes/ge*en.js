// see https://en.wiktionary.org/wiki/ge-#German

export const exceptions = [
	'gehen'
]

export function test (word) {
	word = word.toLowerCase()
	return word.startsWith('ge') && word.endsWith('en') && !exceptions.includes(word)
}

export function unwrap (word, unsafe) {
	if (unsafe || test(word)) {
		return word.slice(2, word.length - 2)
	}
}

export function translate (word, translator) {
	if (test (word)) {
		return "past participle form of " + translator(unwrap(word, true))
	}
}

export function annotate (word) {
	if (test (word)) {
		return "past participle / erminative aktionsart form of " + unwrap(word, true)
	}
}
