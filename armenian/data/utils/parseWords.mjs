import { readFileSync, existsSync, copyFileSync } from 'fs'

const sourceId = '432232'
const min = 1
const max = 16

// const getStringLastPart = (str, delim) => {
// 	const parts = str.split(delim)
// 	return parts[parts.length - 1]
// }
// const fileNameFromPath = path => getStringLastPart(path, '/')
// const fileExt = path => getStringLastPart(path, '.')

const parseArmenianWord = l => {
	const armenian = l.learning_element.toLowerCase()
	// const ar = armenian.split('/')[0].trim()
	const english = l.definition_element
	// let audio = l.screens[1].audio?.value[0].normal
	// if (audio) {
	// 	const src = '../raw/media/' + fileNameFromPath(audio)
	// 	const dst = `../words/media/${ar}.mp3`
	// 	if (existsSync(src)) {
	// 		if (!existsSync(dst)) {
	// 			copyFileSync(src, dst)
	// 		}
	// 	} else {
	// 		audio = null
	// 	}
	// }
	return {
		armenian,
		// armenian_translit: armenian,
		english,
		// audio: `${ar}.mp3`,
	}
}

let parsed = []

for (let i = min; i <= max; i++) {
	// console.log(i)
	const learnables = JSON.parse(readFileSync(`../raw/${sourceId}/${i}.json`)).learnables
	if (!learnables) continue
	parsed = parsed.concat(learnables.map(parseArmenianWord))
}

console.log(JSON.stringify(parsed, null, '\t'))
