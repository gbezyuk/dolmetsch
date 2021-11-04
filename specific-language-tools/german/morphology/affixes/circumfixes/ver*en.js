// see https://en.wiktionary.org/wiki/ver-_-en
// see https://en.wiktionary.org/wiki/Category:German_words_circumfixed_with_ver-_-en

export const exceptions = [
]

export const subsets = [
	{
		type: 'circumfix',
		name: 'ver*fachen',
	},
]

export function test (word) {
	word = word.toLowerCase()
	return word.startsWith('ver') && word.endsWith('en') && !exceptions.includes(word)
}

export function unwrap (word, unsafe) {
	if (unsafe || test(word)) {
		return word.slice(3, word.length - 2)
	}
}

export function translate (word, translator) {
	if (test (word)) {
		return "make more/into " + translator(unwrap(word, true))
	}
}


export function annotate (word) {
	if (test (word)) {
		return "make more/into " + unwrap(word, true)
	}
}
