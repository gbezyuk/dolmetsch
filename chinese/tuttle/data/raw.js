const rawText = '' // load raw.txt here

const result = rawText.split('\n').map(line => {
	if (!line || line.startsWith('Chapter')) {
		return null
	}
	const split = line.split(' ')
	if (split.length === 4 && !(split[1].startsWith('“') && split[split.length-1].endsWith('”'))) {
		const [id, hanzi, pinyin, english] = line.split(' ')
		// console.log({ id, hanzi, pinyin, english })
		return { id, hanzi, pinyin, english }
	} else {
		if (split.length === 2) {
			return null
		}
		if (split[1].startsWith('“')) {
			return null
		}
		if (split[split.length - 2].toLowerCase() === 'to'
			|| split[split.length - 1].toLowerCase() === 'to'
			|| split[split.length - 1].toLowerCase() === 'up'
			|| split[split.length - 1].toLowerCase() === 'down'
			|| split[split.length - 1].toLowerCase() === 'of'
			|| split[split.length - 1].toLowerCase() === 'on'
			|| split[split.length - 1].toLowerCase() === 'off'
			|| split[split.length - 1].toLowerCase() === 'in'
			|| split[split.length - 1].toLowerCase() === 'out'
			|| split[split.length - 1].toLowerCase() === 'over'
			|| split[split.length - 2].toLowerCase() === 'a'
			|| split[split.length - 2].toLowerCase() === 'an'
			|| split[split.length - 2].toLowerCase() === 'the'
			|| split[split.length - 2].toLowerCase() === 'older'
			|| split[split.length - 2].toLowerCase() === 'younger'
		) {
			return {
				id: split[0],
				hanzi: split[1],
				pinyin: split.slice(2, split.length - 2).join(' '),
				english: split.slice(split.length - 2).join(' ')
			}
		} else {
			return {
				id: split[0],
				hanzi: split[1],
				pinyin: split.slice(2, split.length - 1).join(' '),
				english: split[split.length - 1]
			}
		}
	}
}).filter(a => a !== null)

console.log('--- # Hanzi from "Tuttle Learning Chinese Characters"')
result.map(({ id, hanzi, pinyin, english }) => {
console.log(`-
  id: ${id}
  hanzi: ${hanzi}
  pinyin: ${pinyin}
  english: ${english}`)
})

