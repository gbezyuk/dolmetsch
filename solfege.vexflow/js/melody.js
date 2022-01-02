import { generateNotes } from './lib/melody-generation.js'

const $sb = document.getElementById('vexflow-sandbox')
// const displayWas = $sb.style.display

const noteCount = 4
const clef = 'treble'

function init () {
	$sb.innerHTML = ''

	const vf = new Vex.Flow.Factory({
		renderer: { elementId: 'vexflow-sandbox', width: 300, height: 300 },
	});

	const score = vf.EasyScore();
	const system = vf.System();

	const notes = generateNotes(noteCount)
	console.clear()
	console.log(notes)

	const beam = noteCount > 4 ? score.beam.bind(score) : _ => _

	system.addStave({
		voices: [
			score.voice(beam(score.notes(notes, { stem: 'up' }))),
		],
	}).addClef(clef)

	// setTimeout(() => {
	// 	$sb.style.display = 'none'
	// 	document.addEventListener('keypress', () => $sb.style.display = displayWas)
	// }, delayMs)

	// setTimeout(() => $sb.style.display = displayWas, 4*delayMs)
	vf.draw();
	// setTimeout(() => document.body.scroll(0, 0), 0)
}

init()

document.addEventListener('keypress', (e) => {
	// $sb.style.display = $sb.style.display === displayWas ? 'none' : displayWas
	init()
})