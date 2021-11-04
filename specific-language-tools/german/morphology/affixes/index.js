import circumfixes from './circumfixes/index.js'
import suffixes from './suffixes/index.js'
import prefixes from './prefixes/index.js'
// import infixes from './infixes/index.js'
// import interfixes from './interfixes/index.js'

export const affixes = [
	...circumfixes,
	...suffixes,
	...prefixes,
	// ...infixes,
	// ...interfixes,
]

function getMask (affixInfo) {
	switch (affixInfo.affixType) {
		case 'prefix':
			return affixInfo.affix + '*'
		case 'suffix':
			return '*' + affixInfo.affix
		case 'circumfix':
			return affixInfo.affix
	}
}

function analyze (matches) {
	// just a very quick demo of the analytical approach
	// one obvious application would be figuring out infinitives
	const possibilities = []
	let m
	if (m = matches.find(m => m.affixType === 'suffix' && m.affix === 'e')) {
		possibilities.push(['*e adjective plural or feminine form', m.unwrapped.toLowerCase()])
		possibilities.push('*e noun plural or feminine form')
	}
	if (m = matches.find(m => m.affixType === 'suffix' && m.affix === 'en')) {
		possibilities.push('*en verb infinitive or plural form')
		possibilities.push('*en adjective in accusative')
		possibilities.push(['*en noun plural', m.unwrapped])
	}
	if (m = matches.find(m => m.affixType === 'suffix' && m.affix === 'heit')) {
		possibilities.push('*heit noun')
	}
	if (m = matches.find(m => m.affixType === 'suffix' && m.affix === 'bar')) {
		possibilities.push('*bar adjective')
	}
	if (m = matches.find(m => m.affixType === 'suffix' && m.affix === 'lich')) {
		possibilities.push('*lich adverb')
	}
	if (m = matches.find(m => m.affixType === 'suffix' && m.affix === 'es')) {
		possibilities.push(['*es adjective (in neutrum definite form)', m.unwrapped.toLowerCase()])
	}
	return possibilities
}

export function test (word) {
	const matches = []
	for (let a of affixes) {
		if (a.test(word)) {
			matches.push({
				affix: a.affix,
				affixMask: getMask(a),
				affixType: a.affixType,
				annotation: a.annotate(word),
				unwrapped: a.unwrap(word),
			})
		}
	}
	return {
		word,
		matches,
		analysis: analyze(matches)
	}
}
