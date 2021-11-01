// NOT USED AT THE MOMENT

const YANDEX_TRANSLATE_API_KEY = "YOUR KEY HERE"

const requestYandexTranslation = () => {
	const urlEn = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${YANDEX_TRANSLATE_API_KEY}&lang=de-en&format=plain&text=${selectedWord}`
	fetch(urlEn).then(response => response.json()).then(data => {
		if (data.code !== 200) {
			console.error(data)
			return
		}
		translationEn = data.text[0]
		updateInfo()
	})
	const urlRu = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${YANDEX_TRANSLATE_API_KEY}&lang=de-ru&format=plain&text=${selectedWord}`
	fetch(urlRu).then(response => response.json()).then(data => {
		if (data.code !== 200) {
			console.error(data)
			return
		}
		translationRu = data.text[0]
		updateInfo()
	})
}
