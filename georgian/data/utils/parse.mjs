import learnables from '../raw/alphabet.memrise.869792.mjs'

const myTrim = (s) => s && s.length ? s.slice(1, s.length - 1) : s

const parseArmenianLetterLernable = l => {
	const s1 = l.screens[1]
	const small = l.learning_element_tokens[l.learning_element_tokens.length-1]
	return {
		// letter: {
		// 	small,
		// 	capital: l.learning_element_tokens[l.learning_element_tokens.length-2],
		// 	name: myTrim(s1.hidden_info[0]?.value),
		// 	transcription: myTrim(s1.definition.value),
		// },
		// media: {
		// 	audios: s1.audio.value.map(v => v.normal),
		// 	images: s1.visible_info[0]?.value,
		// },
		small,
		capital: l.learning_element_tokens[l.learning_element_tokens.length-2],
		name: myTrim(s1.hidden_info[0]?.value),
		transcription: myTrim(s1.definition.value),
		handwriting: `${small}.png`,
		audios: s1.audio.value.map((v, i) => `${small}_${i+1}.mp3`),
	}
}

const parsed = learnables/*.slice(0, 1)*/.map(parseArmenianLetterLernable)

console.log(JSON.stringify(parsed, null, '\t'))
