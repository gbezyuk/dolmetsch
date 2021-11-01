export const isPunctuationMark = (char) =>
    char === '.' || char === ',' || char === ':'

export const separatePunctuationReducer = (acc, word) => {
    if (!word || !word.length) {
        return acc
    }
    const lastCharIndex = word.length - 1
    const lastChar = word[lastCharIndex]
    if (isPunctuationMark(lastChar)) {
        acc.push(word.slice(0, lastCharIndex))
        acc.push(lastChar)
    } else {
        acc.push(word)
    }
    return acc
}

export const isNumber = (word) => word && word.match(/[+-]?\d+([\.|\,]\d+)?/g)?.length === 1

export const wrapIntoTag = (w) => {
    const className = isPunctuationMark(w)
        ? 'punctuation-mark'
        : isNumber(w)
            ? 'number'
            : 'word'
    return `<span class="${className}">${w}</span>`
}

export const initText = ($text, text) => {
	$text.innerHTML = text.reduce((acc, p) => {
		const s = p.split(' ').reduce(separatePunctuationReducer, []).map(wrapIntoTag).join('')
		acc += `<p>${s}</p>`
		return acc
	}, '')
}

export default initText
