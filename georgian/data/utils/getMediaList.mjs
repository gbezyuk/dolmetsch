// import learnables from '../raw/1.json'

// const parsed = learnables.reduce((acc, l) => {
// 	const s1 = l.screens[1]
// 	return acc.concat(s1.audio.value.map(v => v.normal).concat(s1.visible_info[0]?.value))
// }, [])

// console.log(JSON.stringify(parsed, null, '\t'))

import { readFileSync } from 'fs'

const sourceId = '5597060'
const min = 1
const max = 36

for (let i = min; i <= max; i++) {
	// console.log(i)
	const learnables = JSON.parse(readFileSync(`../raw/${sourceId}/${i}.json`)).learnables
	if (!learnables) continue
	const parsed = learnables.map(l => {
		const s1 = l.screens[1]
		if (l.screens[1].audio?.value[0]) {
			// try {
				console.log(l.screens[1].audio.value[0].normal)
			// } catch {
			// 	console.log('WAT', l.screens[1].audio)
			// }
		}
	})
}
