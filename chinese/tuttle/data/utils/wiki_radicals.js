import characters from './characters.js'
import { getWiktionaryArticle, parseTag } from './wiktionary.js'

const getChineseCharacterWiktionaryRadicalInfo = (chineseCharacter) => {
	const key = 'radical '
	const rl = key.length

	return getWiktionaryArticle(chineseCharacter).then(d => {
		const ri = d.indexOf(key)
		const radicalVicinity = d.slice(ri + rl, ri + rl + 300)
		const radical = radicalVicinity[radicalVicinity.indexOf('</a>') - 1]
		const radicalId = radicalVicinity.slice(0, radicalVicinity.indexOf(','))
		// console.log({ radicalId, radical }, radicalVicinity)
		return { radicalId, radical }
	})
}

characters.map(c => getChineseCharacterWiktionaryRadicalInfo(c.hanzi).then(
	({ radicalId, radical }) => console.log(JSON.stringify({ id: c.id, hanzi: c.hanzi, radicalId, radical }) + ',')
).catch(() => {}))

getChineseCharacterWiktionaryRadicalInfo('下')

// arr.sort((a, b) => parseInt(a.id) - parseInt(b.id))
// console.log(JSON.stringify(arr.map(e => ({ ...e, radicalId: parseInt(e.radicalId) || e.radicalId}))))