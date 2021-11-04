import { test } from './index.js'

const words = [
	'verbessern',
	'verbrennen',

	"urknall", "verbanden", "namens", "entstanden", "ereignis", "grundlegenden", "eigenschaften", "wiederum", "zusammenschlossen", "bestimmte", "bezeichnen", "aufbau", "entwicklung", "geprägt", "beschleunigte", "mitlebewesen", "menschenähnlichen", "stachen", "vielzahl", "vermutlich", "äußerlich", "gewisse", "matsch", "geräusch", "dreinblickenden", "werkzeugherstellung", "abgeschaut", "knurrend", "gefletschten", "vormachtstellung", "währenddessen", "trubel", "streift", "stritten", "nachwuchs", "zogen", "erfanden", "ahnen", "spalten", "unauffällige", "libellen", "quallen", "lebewesen", "fortpflanzungsfähige", "vorfahren", "fortpflanzung", "maultiere", "unfruchtbar", "erheblich", "zeugen", "gattungen", "gattung", "zweiteilige", "art", "urahn", "zahmsten", "katzenvorfahren", "scheinbar", "bestgehüteten", "waisenkind", "vettern", "krawalligen", "menschenaffen", "verwandten", "allernächsten", "urahnin", "geschichte", "menschheit", "unauffälliges"
]

for (let word of words) {
	console.log(test(word))
}
