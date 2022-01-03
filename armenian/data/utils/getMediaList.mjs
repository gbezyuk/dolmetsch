import learnables from './alphabet.memrise.869792.mjs'

const parsed = learnables.reduce((acc, l) => {
	const s1 = l.screens[1]
	return acc.concat(s1.audio.value.map(v => v.normal).concat(s1.visible_info[0]?.value))
}, [])

console.log(JSON.stringify(parsed, null, '\t'))
