// see https://en.wiktionary.org/wiki/Category:German_suffixes

function generateSuffixHandler (suffix) {
	const suffixLength = suffix.length
	const suffixTranslation = suffix
	const suffixMeaning = suffix

	const exceptions = [
	]

	function test (word) {
		word = word.toLowerCase()
		return word.endsWith(suffix) && !exceptions.includes(word)
	}

	function unwrap (word, unsafe) {
		if (unsafe || test(word)) {
			return word.slice(0, word.length - suffixLength)
		}
	}

	function translate (word, translator) {
		if (test (word)) {
			return translator(unwrap(word, true)) + " + " + suffixTranslation
		}
	}

	function annotate (word) {
		if (test (word)) {
			return unwrap(word, true) + " + " + suffixMeaning
		}
	}

	return {
		test,
		unwrap,
		translate,
		annotate,
		exceptions,
		affix: suffix,
		affixType: 'suffix',
	}
}

export const suffixes = [
	"'",
	"'s",
	"'sch",

	"abel",
	"affin",
	"age",
	"al",
	"algie",
	"ämie",
	"ant",
	"anz",
	"är",
	"archie",
	"artig",
	"at",

	"bar",
	"beck",
	"bold",
	"broich",
	"bühren",
	"büren",

	"chen",
	"chens",
	"chor",

	"de",

	"e",
	"ei",
	"ektomie",
	"el",
	"elchen",
	"ell",
	"eln",
	"em",
	"en",
	"end",
	"ens",
	"enz",
	"er",
	"erchen",
	"erei",
	"erl",
	"erlei",
	"ern",
	"erweise",
	"es",
	"esk",
	"eur",
	"euse",

	"fach",
	"fähig",
	"falt",
	"farben",
	"fertig",
	"förmig",
	"frei",

	"gate",
	"gen",
	"gleich",
	"graf",
	"grafie",
	"grafisch",
	"gramm",
	"graph",
	"graphie",
	"graphisch",

	"haft",
	"haftig",
	"halber",
	"haltig",
	"heit",

	"i",
	"iatrie",
	"ien",
	"ier",
	"ieren",
	"iert",
	"if",
	"ig",
	"igen",
	"igkeit",
	"ik",
	"iker",
	"in",
	"ine",
	"ing",
	"ion",
	"iren",
	"is",
	"isch",
	"isieren",
	"isierung",
	"ismus",
	"ist",
	"istisch",
	"it",
	"ität",
	"iter",
	"itis",
	"iv",

	"jährig",

	"keit",
	"ken",
	"kettig",
	"köpfig",
	"kratie",
	"kunde",

	"lastig",
	"le",
	"lei",
	"lein",
	"ler",
	"lich",
	"ling",
	"lings",
	"loge",
	"logie",
	"los",
	"lyse",

	"mal",
	"mässig",
	"mäßig",
	"metrie",

	"n",
	"nis",
	"niß",

	"oid",
	"ologie",
	"om",
	"ös",
	"ose",
	"ow",

	"pathie",
	"pathisch",
	"pflichtig",
	"phil",
	"philie",
	"phob",
	"phobie",
	"prozentig",

	"reich",
	"rich",

	"s",
	"sal",
	"sam",
	"sch",
	"schaft",
	"se",
	"seits",
	"sel",
	"sen",
	"seyts",
	"st",
	"stämmig",
	"ste",

	"t",
	"tägig",
	"te",
	"thum",
	"thumb",
	"tion",
	"trop",
	"tum",
	"tume",
	"tümer",
	"tümern",
	"tumes",
	"tums",

	"ung",
	"urie",

	"verdächtig",
	"vitz",
	"voll",

	"wärtig",
	"wärts",
	"weise",
	"wert",
	"wertig",
	"wesen",
	"witz",
	"wöchig",
	"würdig",

	"zentrisch",
	"zid",
]

export const handlers = suffixes.map(generateSuffixHandler)
export default handlers