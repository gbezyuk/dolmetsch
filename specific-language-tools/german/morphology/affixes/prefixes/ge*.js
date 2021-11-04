// see https://en.wiktionary.org/wiki/ge-#German

export const subsets = [
	{
		type: 'circumfix',
		name: 'ge*t',
	},
	{
		type: 'circumfix',
		name: 'ge*en',
	}
]

export const exceptions = [
	'gehen'
]

export function test (word) {
	word = word.toLowerCase()
	return word.startsWith('ge') && !exceptions.includes(word)
}

export function unwrap (word, unsafe) {
	if (unsafe || test(word)) {
		return word.slice(2, word.length)
	}
}

export function translate (word, translator) {
	if (test (word)) {
		return "collective/action/verbal/accosication noun formed from " + translator(unwrap(word, true))
	}
}

export function annotate (word) {
	if (test (word)) {
		return "collective/action/verbal/accosication noun formed from " + unwrap(word, true)
	}
}
