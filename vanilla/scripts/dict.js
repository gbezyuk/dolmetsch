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
		"bestimmte": "certain",
		"bezeichnen": "describe",
		"aufbau": "building",
		"entwicklung": "development",
		"geprägt": "embossed, shaped, formed",
		"beschleunigte": "sped up",
		"mitlebewesen": "fellow creatures",
		"menschenähnlichen": "humanlike",
		"stachen": "stung",
		"vielzahl": "variety",
		"vermutlich": "allegedly, presumably",
		"äußerlich": "externally",
		"gewisse": "certain",
		"matsch": "mud; passion",
		"geräusch": "noise",
		"dreinblickenden": "looking",
		"werkzeugherstellung": "instrument creation",
		"abgeschaut": "peep, copied",
		"knurrend": "growling",
		"gefletschten": "bared",
		"vormachtstellung": "supremacy",
		"währenddessen": "meanwhile",
		"trubel": "hustle",
		"streift": "walks"
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
		"bestimmte": "определённая",
		"bezeichnen": "описывать",
		"aufbau": "строительство",
		"entwicklung": "развитие",
		"geprägt": "сформированный",
		"beschleunigte": "ускорил",
		"mitlebewesen": "братья наши меньшие",
		"menschenähnlichen": "человекоподобные",
		"stachen": "ужалили",
		"vielzahl": "разнообразие",
		"vermutlich": "якобы, предположительно",
		"äußerlich": "внешне",
		"gewisse": "определённая",
		"matsch": "грязь; азарт",
		"geräusch": "шум",
		"dreinblickenden": "смотрящий",
		"werkzeugherstellung": "создание инструментов",
		"abgeschaut": "подглядел, скопировал",
		"knurrend": "рычащий",
		"gefletschten": "обнажённый",
		"vormachtstellung": "превосходство",
		"währenddessen": "тем временем",
		"trubel": "суета",
		"streift": "прогуливается"
	  }
}

export const translate = (dict, key) => {
	return dict[key.toLowerCase()]
}

export const setTranslation = (lang, original, translation) => {
	translations[lang][original.toLocaleLowerCase()] = translation
	localStorage.setItem('translations', JSON.stringify(translations))
}