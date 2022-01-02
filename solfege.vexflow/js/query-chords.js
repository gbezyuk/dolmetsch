import { randChoice } from './lib/rand.js'

const noteNames = [
	'C', // do
	'D', // re
	'E', // mi
	// 'F', // fa
	// 'G', // sol
	// 'A', // la
	// 'B', // ti
]
const chordType = [
	'',		// dur, major
	'm',	// moll, minor
	'dim',	// diminished (minor), moll-5
	'aug'	// augmented (major), dur+5
]

const generateChord = () =>
	randChoice(noteNames) + randChoice(chordType)

const $q = document.getElementById('question')

const guess = () => {
	question.innerText = generateChord()
}

document.addEventListener('keypress', guess)
guess()
