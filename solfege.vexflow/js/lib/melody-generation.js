import { randIndex, randChoice } from './rand.js'

// function generateNotes (n) {
// 	if (n <= 0) {
// 		return ''
// 	}
// 	const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
// 	const octaves = ['4', '5']
// 	let result = `${randChoice(noteNames)}${randChoice(octaves)}/${n}`
// 	for (let i = 1; i < n; i++) {
// 		result += `, ${randChoice(noteNames)}${randChoice(octaves)}`
// 	}
// 	return result
// }

const noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const octaves = ['4', '5', '6']
const notesAvailable = octaves.reduce((result, o) => {
	result = result.concat(noteNames.map(n => n + o))
	return result
}, [])
const steps = [-3, -2, -1, +1, +2, +3] // in "diatonical halfsteps"

export const generateNote = (prevNote = undefined) => {
	if (!prevNote) {
		return randChoice(notesAvailable)
	}
	const index = notesAvailable.indexOf(prevNote)
	if (index === -1) {
		return randChoice(notesAvailable)
	}
	const step = randChoice(steps)
	return stepFromNote(index, step)
}

export const stepFromNote = (noteIndex, step) => {
	const newIndex = noteIndex + step
	if (newIndex < notesAvailable.length && newIndex >= 0) {
		return notesAvailable[newIndex]
	} else return stepFromNote(noteIndex, -step)
}

export const generateNotes = (n) => {
	if (n <= 0) {
		return ''
	}

	let note = generateNote()
	let result = `${note}/${n}`
	for (let i = 1; i < n; i++) {
		note = generateNote(note)
		result += `, ${note}`
	}
	return result
}

// function generateNote () {
// 	const index = randIndex(noteNames)
// 	return {
// 		octave: randChoice(octaves),
// 		index,
// 		name: noteNames[index]
// 	}
// }

// function generateNextNote (prevNote) {
// 	const step = randChoice(steps)
// 	return stepFromNote(prevNote, step)
// }

// function stepFromNote (note, step) {
// 	const newIndex = note.index + step
// 	if (newIndex < noteNames.length && newIndex >= 0) {
// 		return {
// 			...note,
// 			index: newIndex,
// 			name: noteNames[newIndex]
// 		}
// 	} else return stepFromNote(note, -step)
// }

// function generateNotes (n) {
// 	if (n <= 0) {
// 		return ''
// 	}

// 	let note = generateNote()
// 	let result = `${note.name}${note.octave}/${n}`
// 	for (let i = 1; i < n; i++) {
// 		note = generateNextNote(note)
// 		result += `, ${note.name}${note.octave}`
// 	}
// 	return result
// }

// import Vex from 'vexflow';
// const delayMs = 2500