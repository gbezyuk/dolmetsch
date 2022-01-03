import { readFileSync, existsSync, copyFileSync } from 'fs'

const sourceId = '5597060'
const min = 1
const max = 36

const getStringLastPart = (str, delim) => {
	const parts = str.split(delim)
	return parts[parts.length - 1]
}
const fileNameFromPath = path => getStringLastPart(path, '/')
const fileExt = path => getStringLastPart(path, '.')

const parseGeorgianWord = l => {
	const georgian = l.learning_element.toLowerCase()
	const english = l.definition_element

	// const ar = georgian.split('/')[0].trim()
	const ar = georgian.replaceAll('?', '')
	let audio = l.screens[1].audio?.value[0]?.normal
	if (audio) {
		// console.log('AUDIO', l.screens[1].audio)
		const src = `../raw/${sourceId}/media/${fileNameFromPath(audio)}`
		const dst = `../words/media5597060/${ar}.mp3`
		if (existsSync(src)) {
			if (!existsSync(dst)) {
				copyFileSync(src, dst)
			}
		} else {
			audio = null
		}
	}

	return {
		georgian,
		// georgian_translit: georgian,
		english,
		audio: `${ar}.mp3`,
	}
}

let parsed = []

for (let i = min; i <= max; i++) {
	// console.log(i)
	const learnables = JSON.parse(readFileSync(`../raw/${sourceId}/${i}.json`)).learnables
	if (!learnables) continue
	parsed = parsed.concat(learnables.map(parseGeorgianWord))
}

console.log(JSON.stringify(parsed, null, '\t'))
