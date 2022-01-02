const previewUtils = {

	parseCard: () => {
		card = document.querySelector("[data-testid=presentationLearnableCard]")
		english = card.getElementsByTagName('h3')[0].innerText
		pinyin = card.getElementsByTagName('h4')[0].innerText.split(' ').join('_')
		hanzi = card.getElementsByTagName('h2')[0].innerText
		return { english, hanzi, pinyin }
	},

	moveToNextCard: () => {
		document.querySelector("[data-testid=chevronRight]").parentElement.click()
	}

}

const parseTuttleLearnable = (learnable) => {
	const s = learnable.screens[1]

	const hanzi = s.item.value
	const english = s.definition.value
	const pinyin = s.hidden_info[0].value.split(' ').join('_')

	// "https://static.memrise.com/uploads/audio/".length === 41
	const audios = s.audio?.value.map(v => v.normal.slice(41))

	return {
		hanzi,
		pinyin,
		english,
		audios,
		type: hanzi.length > 1 ? "word" : "character"
	}
}

import { existsSync, readFileSync, writeFileSync, createWriteStream, mkdirSync, copyFileSync } from 'fs'

const parseMemriseLearnablesJSON = (fileName) => {
	const rawdata = readFileSync(fileName)
	const json = JSON.parse(rawdata)
	const learnables = json.learnables
	return learnables.reduce((a, l) => {
		a.push(parseTuttleLearnable(l))
		return a
	}, [])
}

const parseCourse = (inputFileNameGenerator, inputFileNameToOutputFileName) => {
	for (let inputFilePath of inputFileNameGenerator()) {
		writeFileSync(
			inputFileNameToOutputFileName(inputFilePath),
			JSON.stringify(parseMemriseLearnablesJSON(inputFilePath), null, '\t')
		)
	}
}

// const formInputPath = n => `../raw/memrise.306623.tuttle.800.chinese.characters/${n}.json`
// const formOutputPath = n => `../parsed/memrise/${n}.json`
// writeFileSync(formOutputPath(i), JSON.stringify(parseMemriseLearnablesJSON(formInputPath(i)), null, '\t'))

function* tuttleInputFileNameGenerator () {
	for (let i = 1; i <= 40; i++) {
		yield `../raw/memrise.306623.tuttle.800.chinese.characters/${i}.json`
	}
}

const tuttleInputFileNameToOutputFileName = fn => {
	const parts = fn.split('/')
	return `../parsed/memrise/${parts[parts.length - 1]}`
}

// parseCourse(tuttleInputFileNameGenerator, tuttleInputFileNameToOutputFileName)


const handleParsed = (fileNameGenerator, fileHandler) => {
	for (let inputFilePath of fileNameGenerator()) {
		fileHandler(readFileSync(inputFilePath))
	}
}

function* parsedFileNameGenerator () {
	for (let i = 1; i <= 40; i++) {
		yield `../parsed/memrise/${i}.json`
	}
}

const s = new Set()

const audioFileHandler = (file) => {
	JSON.parse(file).map(e => {
		if (e.audios) {
			e.audios.map(a => s.add("https://static.memrise.com/uploads/audio/" + a))
		}
	})
}

// handleParsed(parsedFileNameGenerator, audioFileHandler);
// ([...s]).map(url => console.log(url))

import https from 'https'

const outputFilePath = (url) => {
	const parts = url.split('/')
	// if (parts[parts.length - 2] == 'audio') {
	// 	return '../mp3s/' + parts[parts.length - 2] + '_' + parts[parts.length - 1]
	// }
	return '../mp3s/' + parts[parts.length - 1]
}

const archiveFilePath = (url) => {
	const parts = url.split('/')
	// if (parts[parts.length - 2] == 'audio') {
	// 	return '../mp3s/' + parts[parts.length - 2] + '_' + parts[parts.length - 1]
	// }
	return '../mp3s/done/' + parts[parts.length - 1]
}

const downloadStaticFile = (url) => {
	const afp = archiveFilePath(url)
	if (existsSync(afp)) {
		console.log('ARCHIVE', url)
		return Promise.resolve(false)
	}

	const ofp = outputFilePath(url)
	if (existsSync(ofp)) {
		console.log('ALREADY', url)
		return Promise.resolve(false)
	}

	return new Promise((resolve) => {
		const file = createWriteStream(ofp)
		console.log('START', url)
		https.get(url, response => {
			response.pipe(file)

			response.on('end', () => {
				console.log('FINISH', url)
				file.close()
				resolve(true)
			})
		})
	})
}

const downloadMp3s = async () => {
	const urls = ('' + readFileSync('../parsed/mp3.urls.txt')).split('\n')//.splice(0, 20)
	await Promise.all(urls.map(url => downloadStaticFile(url)))
}

// await downloadMp3s()

// const pinyin2mp3 = {}

// const cleanMp3Name = (n) => {
// 	const parts = n.split('/')
// 	return parts[parts.length - 1]
// }

// const audioFileHandler2 = (file) => {
// 	JSON.parse(file).map(e => {
// 		if (e.audios) {
// 			if (!(e.pinyin in pinyin2mp3)) {
// 				pinyin2mp3[e.pinyin] = new Set()
// 			}
// 			e.audios.map(a => pinyin2mp3[e.pinyin].add(cleanMp3Name(a)))
// 		}
// 	})
// }

// handleParsed(parsedFileNameGenerator, audioFileHandler2)

// Object.keys(pinyin2mp3).map(pinyin => {
// 	pinyin2mp3[pinyin] = [...pinyin2mp3[pinyin]]
// })

// // console.log(JSON.stringify(pinyin2mp3, null, '\t'))
// let words = 0, syllable = 0, amb = 0, missing = 0, present = 0

// const stipTone = (p) => {
// 	return p.slice(0, p.length - 1)
// }

// const ensureDir = (folderName) => {
// 	if (!existsSync(folderName)) {
//     	mkdirSync(folderName)
//   	}
// }

// ensureDir('../mp3s/parsed')
// ensureDir('../mp3s/parsed/syllables')
// ensureDir('../mp3s/parsed/words')

// Object.keys(pinyin2mp3).map(pinyin => {
// 	const mp3s = pinyin2mp3[pinyin]
// 	if (pinyin.includes(';') || pinyin.includes(',')) {
// 		// console.log('ambiguous: ', pinyin)
// 		amb++
// 	} else if (pinyin.includes('_')) {
// 		console.log('word: ', pinyin)
// 		let i = 0
// 		mp3s.map(mp3 => {
// 			const filePath = `../mp3s/done/${mp3}`
// 			if (existsSync(filePath)) {
// 				i++
// 				present++
// 				console.log('present', pinyin, mp3)
// 				const resultFilePath = `../mp3s/parsed/words/${pinyin}/${pinyin}_${i}.mp3`
// 				if (existsSync(resultFilePath)) {
// 					console.log('already copied')
// 				} else {
// 					ensureDir('../mp3s/parsed/words/' + pinyin)
// 					copyFileSync(filePath, resultFilePath)
// 					console.log('copied')
// 				}
// 			} else {
// 				missing++
// 				console.log('missing', pinyin, mp3)
// 			}
// 		})
// 		words++
// 	} else {
// 		const noTone = stipTone(pinyin)
// 		// console.log('syllable: ', pinyin, noTone)
// 		// let i = 0
// 		// mp3s.map(mp3 => {
// 		// 	const filePath = `../mp3s/done/${mp3}`
// 		// 	if (existsSync(filePath)) {
// 		// 		i++
// 		// 		present++
// 		// 		console.log('present', pinyin, mp3)
// 		// 		const resultFilePath = `../mp3s/parsed/syllables/${noTone}/${pinyin}/${pinyin}_${i}.mp3`
// 		// 		if (existsSync(resultFilePath)) {
// 		// 			console.log('already copied')
// 		// 		} else {
// 		// 			ensureDir('../mp3s/parsed/syllables/' + noTone)
// 		// 			ensureDir('../mp3s/parsed/syllables/' + noTone + '/' + pinyin)
// 		// 			copyFileSync(filePath, resultFilePath)
// 		// 			console.log('copied')
// 		// 		}
// 		// 	} else {
// 		// 		missing++
// 		// 		console.log('missing', pinyin, mp3)
// 		// 	}
// 		// })
// 		syllable++
// 	}
// })

// console.log(syllable, words, amb, '|', present, missing)




// const handleWords = (file) => {
// 	JSON.parse(file).map(e => {
// 		if (e.type === 'word') {
// 			console.log({
// 				hanzi: e.hanzi,
// 				pinyin: e.pinyin,
// 				english: e.english,
// 			})
// 		}
// 	})
// }

// handleParsed(parsedFileNameGenerator, handleWords)

let i = 0
const lessons = []

const handleLessons = (file) => {
	i++
	lessons.push(JSON.parse(file).map(e => e.hanzi))
}


handleParsed(parsedFileNameGenerator, handleLessons)
console.log(lessons)
