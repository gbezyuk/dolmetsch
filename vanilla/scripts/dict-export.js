const $dictExportRu = document.getElementById('dict-export-ru')
const $dictExportEn = document.getElementById('dict-export-en')
const $dictExportDf = document.getElementById('dict-export-df')
import { translations } from './dict.js'

$dictExportRu.innerText = JSON.stringify(translations.ru, Object.keys(translations.ru).sort(), 2)
$dictExportEn.innerText = JSON.stringify(translations.en, Object.keys(translations.en).sort(), 2)
$dictExportDf.innerText = JSON.stringify(translations.dictionaryForm, Object.keys(translations.dictionaryForm).sort(), 2)

