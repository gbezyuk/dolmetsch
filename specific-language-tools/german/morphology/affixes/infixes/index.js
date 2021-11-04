// see https://en.wiktionary.org/wiki/Category:German_infixes

function generateInfixHandler (infix) {
	// const infixLength = infix.length
	const infixTranslation = infix
	const infixMeaning = infix

	const exceptions = [
	]

	function test (word) {
		word = word.toLowerCase()
		return word.includes(infix)
			&& !word.startsWith(infix) && !word.endsWith(infix)
			&& !exceptions.includes(word)
	}

	function unwrap (word, unsafe) {
		if (unsafe || test(word)) {
			return word
		}
	}

	function translate (word, translator) {
		if (test (word)) {
			return translator(unwrap(word, true)) + " + " + infixTranslation
		}
	}

	function annotate (word) {
		if (test (word)) {
			return unwrap(word, true) + " + " + infixMeaning
		}
	}

	return {
		test,
		unwrap,
		translate,
		annotate,
		affix: infix,
		affixType: 'infix',
		exceptions,
	}
}

export const infixes = [
	"zu",
]

export const handlers = infixes.map(generateInfixHandler)
export default handlers