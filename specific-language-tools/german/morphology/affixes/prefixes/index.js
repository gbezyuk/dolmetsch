// see https://en.wikipedia.org/wiki/German_verbs#German_prefixes

function generatePrefixHandler (prefix) {
	const prefixLength = prefix.length
	const prefixTranslation = prefix
	const prefixMeaning = prefix

	const exceptions = [
	]

	function test (word) {
		word = word.toLowerCase()
		return word.startsWith(prefix) && !exceptions.includes(word)
	}

	function unwrap (word, unsafe) {
		if (unsafe || test(word)) {
			return word.slice(prefixLength, word.length)
		}
	}

	function translate (word, translator) {
		if (test (word)) {
			return prefixTranslation + " + " + translator(unwrap(word, true))
		}
	}

	function annotate (word) {
		if (test (word)) {
			return prefixMeaning + " + " + unwrap(word, true)
		}
	}

	return {
		test,
		unwrap,
		translate,
		annotate,
		exceptions,
		affix: prefix,
		affixType: 'prefix',
	}
}

export const prefixes = [
	'ab',
	'an',
	'auf',
	'aus',
	'be',
	'bei',
	'dar',
	'ein',
	'ent',
	'emp',
	'er',
	'ge',
	'hin',
	'her',
	'nach',
	'nieder',
	'über',
	'um',
	'unter',
	'ver',
	'vor',
	'weg',
	'wider',
	'zer',
	'zu',
	'zusammen',
]

export const handlers = prefixes.map(generatePrefixHandler)
export default handlers