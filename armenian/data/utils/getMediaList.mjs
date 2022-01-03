// import learnables from '../raw/1.json'

// const parsed = learnables.reduce((acc, l) => {
// 	const s1 = l.screens[1]
// 	return acc.concat(s1.audio.value.map(v => v.normal).concat(s1.visible_info[0]?.value))
// }, [])

// console.log(JSON.stringify(parsed, null, '\t'))

import { readFileSync } from 'fs'

for (let i = 1; i <= 36; i++) {
	// console.log(i)
	const learnables = JSON.parse(readFileSync(`../raw/${i}.json`)).learnables
	const parsed = learnables.map(l => {
		const s1 = l.screens[1]
		if (l.screens[1].audio) {
			console.log(l.screens[1].audio.value[0].normal)
		}
	})
}
