import germanHarariDict from "../german/text-specific-dictionaries/harari.js"
import defaultDutchDict from "../dutch/defaultDict.js"
import { languagesAvailable } from "./languagesAvailable.js"

const LOCAL_STORAGE_KEY = 'translations' // TODO: key change

const persistency = {
	get: () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
	store: () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dicts))
}

let dicts
const translations = persistency.get()

// migration 01 => 02
if (translations && !('de' in translations)) {

	// migration 00 => 01
	if (!translations["dictionaryForm"]) {
		translations["dictionaryForm"] = {}
	}

	dicts = {
		de: translations
	}
} else {
	dicts = translations || {
		de: germanHarariDict,
		nl: defaultDutchDict,
	}
}

for (let langCode of languagesAvailable.map(l => l.code)) {
	if (!(langCode in dicts)) {
		dicts[langCode] = {
			en: {},
			ru: {},
			dictionaryForm: {},
		}
	}
}

export const getTranslation = (originalLanguage, targetLanguage, word) => {
	try {
		return dicts[originalLanguage][targetLanguage][word.toLowerCase()]
	} catch {
		return undefined
	}
}

export const isTranslated = (originalLanguage, word) => {
	if (!(originalLanguage in dicts)) {
		return false
	}
	for (let targetLanguage of Object.keys(dicts[originalLanguage])) {
		const dict = dicts[originalLanguage][targetLanguage]
		if (word in dict && !!dict[word]) {
			return true
		}
	}
	return false
}

export const setTranslation = (originalLanguage, targetLanguage, original, translation) => {
	if (!(originalLanguage in dicts)) {
		dicts[originalLanguage] = {}
	}
	if (!(targetLanguage in dicts[originalLanguage])) {
		dicts[originalLanguage][targetLanguage] = {}
	}
	dicts[originalLanguage][targetLanguage][original.toLocaleLowerCase()] = translation
	persistency.store()
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


const _setUnion = (setA, setB) => {
	let _union = new Set(setA)
	for (let elem of setB) {
		_union.add(elem)
	}
	return _union
}

export const getKeys = (originalLanguage) => {
	if (! (originalLanguage in dicts)) {
		return []
	} else {
		const dict = dicts[originalLanguage]
		const targetLanguages = Object.keys(dict)
		let keySet = new Set()
		for (let targetLanguage of targetLanguages) {
			keySet = _setUnion(
				keySet,
				new Set(
					Object.keys(
						dict[targetLanguage]
					)
				)
			)
		}
		const keys = [...keySet]
		keys.sort()
		return keys
	}
}


export const getDict = (originalLanguage, targetLanguage) => {
	return dicts[originalLanguage] && dicts[originalLanguage][targetLanguage]
}