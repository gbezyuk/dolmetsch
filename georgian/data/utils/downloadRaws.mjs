import { existsSync, createWriteStream, readFileSync } from 'fs'
import https from 'https'

const sourceId = '5597060'
const min = 1
const max = 36

const outputFilePath = (i) => {
	return `../raw/${sourceId}/${i}.json`
}

const headers = {
	cookie: 'ajs_anonymous_id=%2270c75f04-df3e-45e3-89dd-128a1ddc297b%22; G_ENABLED_IDPS=google; sessionid_2=guo73nfj5kl5w0i8e1bt03ewejz4riohc; i18next=en; cookieconsent_status=allow; memrise_lang=en; csrftoken=YKLm1EZcvhWIFmcy4WsHgcDb2lTJ59BSf3fcBuPfjNlYIVTChHRUzFnLll58LhjE; ajs_user_id=5060199'
}

const downloadStaticFile = (i) => {

	const url = `https://app.memrise.com/v1.17/learning_sessions/preview/?session_source_id=${sourceId}&session_source_sub_index=${i}&session_source_type=course_id_and_level_index`

	const ofp = outputFilePath(i)
	// if (existsSync(ofp)) {
	// 	console.log('ALREADY', url)
	// 	return Promise.resolve(false)
	// }

	return new Promise((resolve) => {
		const file = createWriteStream(ofp)
		// console.log('START', url)
		https.get(url, { headers, }, response => {
			response.pipe(file)

			response.on('end', () => {
				// console.log('FINISH', url)
				file.close()
				resolve(true)
			})
		})
	})
}

for (let i = min; i <= max; i++) {
	console.log(i)
	await downloadStaticFile(i)
}