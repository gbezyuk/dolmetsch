const $dictExportRu = document.getElementById('dict-export-ru')
const $dictExportEn = document.getElementById('dict-export-en')
import { translations } from './dict.js'

$dictExportRu.innerText = JSON.stringify(translations.ru, Object.keys(translations.ru).sort(), 2)
$dictExportEn.innerText = JSON.stringify(translations.ru, Object.keys(translations.ru).sort(), 2)

