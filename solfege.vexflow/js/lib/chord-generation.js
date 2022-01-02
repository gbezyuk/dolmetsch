import { randIndex, randChoice } from './rand.js'

const chordLength = 3 // do triads for now
const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const octaves = [3]
const step = 2 // use thirds only, and root positions only

export const generateChord = () => {
	let index = randIndex(noteNames)
	let octave = randChoice(octaves)
	const chord = []
	for (let i = 0; i < chordLength; i++) {
		chord.push(noteNames[index] + octave)
		index += step
		if (index >= noteNames.length) {
			octave++
		}
		index %= noteNames.length
	}
	return chord
}
