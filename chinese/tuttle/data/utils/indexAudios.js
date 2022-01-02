import { readdirSync } from 'fs'

function indexSyllables () {

	const metasyllables = readdirSync('../audio/parsed/syllables').filter(n => !n.startsWith('.'))

	const sMp3s = metasyllables.reduce((acc, ms) => {
		const syllables = readdirSync('../audio/parsed/syllables/' + ms).filter(n => !n.startsWith('.'))
		const sMp3s = syllables.reduce((acc, s) => {
			const mp3s = readdirSync('../audio/parsed/syllables/' + ms + '/' + s).filter(n => !n.startsWith('.'))
			acc[s] = mp3s.map(url => `syllables/${ms}/${s}/${url}`)
			return acc
		}, acc)
		return acc
	}, {})

	console.log(sMp3s)

}


function indexWords () {

	const words = readdirSync('../audio/parsed/words').filter(n => !n.startsWith('.'))

	const wMp3s = words.reduce((acc, w) => {
		const mp3s = readdirSync('../audio/parsed/words/' + w).filter(n => !n.startsWith('.'))
		acc[w] = mp3s.map(url => `words/${w}/${url}`)
		return acc
	}, {})

	console.log(wMp3s)

}

// indexWords()
indexSyllables()