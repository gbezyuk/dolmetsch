import { readFileSync, existsSync, mkdirSync, copyFileSync } from 'fs'

const getStringLastPart = (str, delim) => {
	const parts = str.split(delim)
	return parts[parts.length - 1]
}
const fileNameFromPath = path => getStringLastPart(path, '/')
const fileExt = path => getStringLastPart(path, '.')

const renameMedia = async () => {
	const letters = JSON.parse(readFileSync('../parsed/letters.json'))
	letters.map(l => {
		if (l.media?.images) {
			l.media.images.map(url => {
				const fn = fileNameFromPath(url)
				const src = '../raw/media/' + fn
				const dst = '../parsed/media/handwritings/' + l.letter.small + '.' + fileExt(fn)
				if (existsSync(dst)) {
					console.log('ALREADY', l.letter.small, 'HW')
				} else {
					copyFileSync(src, dst)
					console.log('COPIED', l.letter.small, 'HW')
				}
			})
		}
		if (l.media?.audios) {
			let i = 0
			l.media.audios.map(url => {
				i += 1
				const fn = fileNameFromPath(url)
				const src = '../raw/media/' + fn
				const dst = '../parsed/media/audios/' + l.letter.small + `_${i}.` + fileExt(fn)
				if (existsSync(dst)) {
					console.log('ALREADY', l.letter.small, i, 'audio')
				} else {
					copyFileSync(src, dst)
					console.log('COPIED', l.letter.small, i, 'audio')
				}
			})
		}
	})
}

renameMedia()
