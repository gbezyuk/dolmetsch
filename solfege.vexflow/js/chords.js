import { generateChord } from './lib/chord-generation.js'

const $sb = document.getElementById('vexflow-sandbox')

const clef = 'treble'

function init () {
	$sb.innerHTML = ''

	const vf = new Vex.Flow.Factory({
		renderer: { elementId: 'vexflow-sandbox', width: 300, height: 300 },
	});

	const score = vf.EasyScore();
	const system = vf.System();

	const chord = generateChord()
	console.clear()
	console.log(chord)

	system.addStave({
		voices: chord.map(note => score.voice(score.notes(note + '/1'))),
	}).addClef(clef)

	vf.draw();
}

init()

document.addEventListener('keypress', (e) => {
	init()
})
