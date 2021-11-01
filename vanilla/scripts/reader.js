import initText from "./reader/initText.js"
import { translate, translations, setTranslation } from './dict.js'

const $originalWord = document.getElementById('originalWord')
const $occurences = document.getElementById('occurences')
const $translationEn = document.getElementById('translationEn')
const $translationRu = document.getElementById('translationRu')
const $text = document.getElementById('text')
let selectedWord = ''
let translationEn = ''
let translationRu = ''
let occurences = 0

const handleWordClick = (word) => {
	if (selectedWord === word) {
		selectedWord = ''
	} else {
		selectedWord = word
	}
	updateWordSelectionIndication()
	checkTranslations()
	updateInfo()
	// requestYandexTranslation()
}

const updateWordSelectionIndication = () => {
	occurences = 0;
	[...document.getElementsByClassName('word')].map($w => {
		const selected = $w.innerText.toLowerCase() === selectedWord.toLowerCase()
		if (selected) {
			occurences++
		}
		$w.classList.toggle('selected', selected)
	})
}

const renderDictPresenceStatus = () => {
	[...document.getElementsByClassName('word')].map($w => {
		const w = $w.innerText.toLowerCase()
		$w.classList.toggle('translated', w in translations.en || w in translations.ru)
	})
}

const updateInfo = () => {
	$originalWord.innerText = selectedWord
	$occurences.innerText = occurences
	$translationEn.innerText = translationEn || ''
	$translationRu.innerText = translationRu || ''
}

document.body.addEventListener('click', (e) => {
	if (e.target.classList.contains('word')) {
		handleWordClick(e.target.innerText)
	}
})

document.body.addEventListener('keyup', (e) => {
	if (!selectedWord) {
		return
	}
	if (e.target.classList.contains('translation')) {
		const translationText = e.target.innerText
		switch (e.target.id) {
			case 'translationRu':
				setTranslation('ru', selectedWord, translationText)
				break
			case 'translationEn':
				setTranslation('en', selectedWord, translationText)
				break
		}
		setTimeout(renderDictPresenceStatus, 0)
	}
}, true)

const text = `Vor rund 13,5 Milliarden Jahren entstanden Materie, Energie, Raum und Zeit in einem Ereignis namens Urknall. Die Geschichte dieser grundlegenden Eigenschaften unseres Universums nennen wir Physik.
Etwa 300000 Jahre später verbanden sich Materie und Energie zu komplexeren Strukturen namens Atome, die sich wiederum zu Molekülen zusammenschlossen. Die Geschichte der Atome, Moleküle und ihrer Reaktionen nennen wir Chemie.
Vor 3,8 Milliarden Jahren begannen auf einem Planeten namens Erde bestimmte Moleküle, sich zu besonders großen und komplexen Strukturen zu verbinden, die wir als Organismen bezeichnen. Die Geschichte dieser Organismen nennen wir Biologie.
Und vor gut 70000 Jahren begannen Organismen der Art Homo sapiens mit dem Aufbau von noch komplexeren Strukturen namens Kulturen. Die Entwicklung dieser Kulturen nennen wir Geschichte.
Die Geschichte der menschlichen Kulturen wurde von drei großen Revolutionen geprägt. Die kognitive Revolution vor etwa 70000 Jahren brachte die Geschichte überhaupt erst in Gang. Die landwirtschaftliche Revolution vor rund 12000 Jahren beschleunigte sie. Und die wissenschaftliche Revolution, die vor knapp 500 Jahren ihren Anfang nahm, könnte das Ende der Geschichte und der Beginn von etwas völlig Neuem sein. Dieses Buch erzählt, welche Konsequenzen diese drei Revolutionen für den Menschen und seine Mitlebewesen hatten und haben.
Menschen gab es schon lange vor dem Beginn der Geschichte. Die ersten menschenähnlichen Tiere betraten vor etwa 2,5 Millionen Jahren die Bühne. Aber über zahllose Generationen hinweg stachen sie nicht aus der Vielzahl der Tiere heraus, mit denen sie ihren Lebensraum teilten. Wenn wir 2 Millionen Jahre in die Vergangenheit reisen und einen Spaziergang durch Ostafrika unternehmen könnten, würden wir dort vermutlich Gruppen von Menschen begegnen, die äußerlich gewisse Ähnlichkeit mit uns haben. Besorgte Mütter tragen ihre Babys auf dem Arm, Kinder spielen im Matsch. Von irgendwoher dringt das Geräusch von Steinen, die aufeinandergeschlagen werden, und wir sehen einen ernst dreinblickenden jungen Mann, der sich in der Kunst der Werkzeugherstellung übt. Die Technik hat er sich bei zwei Männern abgeschaut, die sich gerade um einen besonders fein gearbeiteten Feuerstein streiten; knurrend und mit gefletschten Zähnen tragen sie eine weitere Runde im Kampf um die Vormachtstellung in der Gruppe aus. Währenddessen zieht sich ein älterer Herr mit weißen Haaren aus dem Trubel zurück und streift allein durch ein nahe gelegenes Waldstück, wo er von einer Horde Schimpansen überrascht wird.`.split('\n')

initText($text, text)

const checkTranslations = () => {
	translationEn = translate(translations.en, selectedWord)
	translationRu = translate(translations.ru, selectedWord)
}

renderDictPresenceStatus()