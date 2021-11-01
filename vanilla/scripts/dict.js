export const translations = JSON.parse(localStorage.getItem('translations')) || {
	"en": {
		"urknall": "Big Bang",
		"verbanden": "bond",
		"namens": "called",
		"entstanden": "emerged",
		"ereignis": "event",
		"grundlegenden": "fundamental",
		"eigenschaften": "properties",
		"wiederum": "in turn",
		"zusammenschlossen": "united",
		"bestimmte": "certain"
	},
	"ru": {
		"urknall": "Большой Взрыв",
		"verbanden": "связали",
		"namens": "под названием",
		"entstanden": "появились",
		"ereignis": "событие",
		"grundlegenden": "основополагающий",
		"eigenschaften": "характеристики",
		"wiederum": "в свою очередь",
		"zusammenschlossen": "соединились",
		"bestimmte": "определённая"
	}
}

export const translate = (dict, key) => {
	return dict[key.toLowerCase()]
}

export const setTranslation = (lang, original, translation) => {
	translations[lang][original.toLocaleLowerCase()] = translation
	localStorage.setItem('translations', JSON.stringify(translations))
	renderDictPresenceStatus()
}