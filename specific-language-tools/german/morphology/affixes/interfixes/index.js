// see https://en.wiktionary.org/wiki/Category:German_interfixes

function generateInterfixHandler (interfix) {
	// const interfixLength = interfix.length
	const interfixTranslation = interfix
	const interfixMeaning = interfix

	const exceptions = [
	]

	function test (word) {
		word = word.toLowerCase()
		return word.includes(interfix)
			&& !word.startsWith(interfix) && !word.endsWith(interfix)
			&& !exceptions.includes(word)
	}

	function unwrap (word, unsafe) {
		if (unsafe || test(word)) {
			return word
		}
	}

	function translate (word, translator) {
		if (test (word)) {
			return translator(unwrap(word, true)) + " + " + interfixTranslation
		}
	}

	function annotate (word) {
		if (test (word)) {
			return unwrap(word, true) + " + " + interfixMeaning
		}
	}

	return {
		test,
		unwrap,
		translate,
		annotate,
		exceptions,
		affix: interfix,
		affixType: 'interfix',
	}
}

export const interfixes = [
	"e",
	"en",
	"ens",
	"er",
	"es",

	"n",
	"ns",

	"o",

	"s",
]

export const handlers = interfixes.map(generateInterfixHandler)
export default handlers