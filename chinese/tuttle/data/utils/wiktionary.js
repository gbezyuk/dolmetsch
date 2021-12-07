import https from 'https'

export const getWiktionaryArticle = (articleName) => {

	return new Promise(function(resolve, reject) {

		const options = {
			hostname: 'en.wiktionary.org',
			port: 443,
			path: '/wiki/' + encodeURI(articleName),
			method: 'GET'
		}

		let data = ''

		const req = https.request(options, res => {
			if (res.statusCode !== 200) {
				console.log(articleName, `statusCode: ${res.statusCode}`)
			}

			res.on('data', d => {
				// process.stdout.write(d)
				data += d
			})

			res.on('end', () => {
				resolve(data)
			})
		})

		req.on('error', error => {
			console.error(error)
			reject('')
		})

		req.end()
	})
}

export const parseTag = (str, startIndex) => {
	if (str[startIndex] !== '<') {
		return
	}
	while (str[startIndex] !== '>') {
		startIndex++
	}
	startIndex++
	let char = ''
	while (str[startIndex] !== '<') {
		char += str[startIndex]
		startIndex++
	}
	while (str[startIndex] !== '>') {
		startIndex++
	}
	startIndex++
	return {
		char,
		nextIndex: startIndex
	}
}