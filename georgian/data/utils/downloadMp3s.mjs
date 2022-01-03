import { existsSync, createWriteStream, readFileSync } from 'fs'
import https from 'https'

const sourceId = '5597060'

const outputFilePath = (url) => {
	const parts = url.split('/')
	return `../raw/${sourceId}/media/${parts[parts.length - 1]}`
}

const downloadStaticFile = (url) => {
	if (!url) return
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

const downloadMedia = async () => {
	const urls = ('' + readFileSync(`../raw/${sourceId}/media.urls.txt`)).split('\n')
	await Promise.all(urls.map(url => downloadStaticFile(url)))
}

await downloadMedia()