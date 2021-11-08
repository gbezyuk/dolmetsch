export const isNumber =
	(word) => word && word.match(/[+-]?\d+([\.|\,]\d+)?/g)?.length === 1

export function sanitizeWord (word) {
	return word.toLocaleLowerCase()
}

export function smartTrimLeft (s, p) {
	let i
	for (i = 0; i < s.length; i++) {
		const char = s[i]
		if (!p.includes(char)) {
			break
		}
	}
	return s.slice(i)
}


export function smartTrimRight (s, p) {
	let i
	for (i = s.length - 1; i >= 0; i--) {
		const char = s[i]
		if (!p.includes(char)) {
			break
		}
	}
	return s.slice(0, i + 1)
}
