import characters from './characters.js'
import { getWiktionaryArticle, parseTag } from './wiktionary.js'

const getChineseCharacterWiktionaryCompositionInfo = (chineseCharacter) => {
	const cl = "composition</a></i> ".length

	return getWiktionaryArticle(chineseCharacter).then(d => {
		const ci = d.indexOf('composition')
		const composition = d[ci + cl]
		// console.log(ci, d.slice(ci + cl+1, ci+cl+200))
		const components = []
		let j = ci + cl + 1
		for (let i = 0; i < 3; i ++) {
			try {
				const { char, startIndex } = parseTag(d, j)
				j = startIndex
				components.push(char)
			} catch (TypeError) {
				// pass
			}
		}
		return { composition, components }
	})
}

characters.map(c => getChineseCharacterWiktionaryCompositionInfo(c.hanzi).then(
	({ composition, components }) => console.log(c.id, c.hanzi, composition, components)
).catch(() => {}))
