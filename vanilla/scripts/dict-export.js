const $dictExport = document.getElementById('dictExport')
import { translations } from './dict.js'

$dictExport.innerText = JSON.stringify(translations, null, 2)
