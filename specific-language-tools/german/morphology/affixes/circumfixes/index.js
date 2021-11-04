import * as ge_en from './ge*en.js'
import * as ge_t from './ge*t.js'
import * as ver_en from './ver*en.js'
import * as ver_fachen from './ver*fachen.js'

export default [
	{
		affix: 'ge*en',
		affixType: 'circumfix',
		...ge_en,
	},
	{
		affix: 'ge*t',
		affixType: 'circumfix',
		...ge_t,
	},
	{
		affix: 'ver*en',
		affixType: 'circumfix',
		...ver_en,
	},
	{
		affix: 'ver*fachen',
		affixType: 'circumfix',
		...ver_fachen,
	},
]
