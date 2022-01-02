export const digitizeSyllable = (s) => {
	if (!s) return s

	try {

		s = s.split(' ')[0]

		const legend = {
			'a': [ 'ā', 'á', 'ǎ', 'à' ],
			'e': [ 'ē', 'é', 'ě', 'è' ],
			'i': [ 'ī', 'í', 'ǐ', 'ì' ],
			'u': [ 'ū', 'ú', 'ǔ', 'ù' ],
			'o': [ 'ō', 'ó', 'ǒ', 'ò' ],
			'v': [ 'ǖ', 'ǘ', 'ǚ', 'ǜ' ]
		}


		for (let replacement in legend) {
			const tonedLetters = legend[replacement]
			for (let tone in tonedLetters) {
				const letter = tonedLetters[tone]
				tone++
				if (s.includes(letter)) {
					return s.replace(letter, replacement) + tone
				}
			}
		}

		return s + 5


	} catch (e) {
		console.error(e)
		return s
	}
}

export default digitizeSyllable
