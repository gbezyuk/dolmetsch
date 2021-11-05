import harariDict from "./german-tools/text-specific-dictionaries/harari.js"

export const translations = JSON.parse(localStorage.getItem('translations')) || harariDict

// data format migration
if (!translations["dictionaryForm"]) {
	translations["dictionaryForm"] = {}
}

export const translate = (dict, key) => {
	return dict[key.toLowerCase()]
}

export const setTranslation = (lang, original, translation) => {
	translations[lang][original.toLocaleLowerCase()] = translation
	localStorage.setItem('translations', JSON.stringify(translations))
}

export const requestLocalTranslation = (word) => {
	fetch(`/local-dictionary/${word.toLocaleLowerCase()}.json`)
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Network response was not OK', response)
			}
		})
		.then(console.log.bind(console))
	.catch(response => console.log('no local dict entry', response))
}