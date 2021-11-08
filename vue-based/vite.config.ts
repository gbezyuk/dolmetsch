import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases'
import ViteRawPlugin from 'vite-raw-plugin'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
			  compilerOptions: {
				isCustomElement: tag => tag.endsWith('-webcomponent')
			  }
			}
		}),
		ViteAliases(),
		ViteRawPlugin({
			fileRegex: /\.txt$/
		})
	]
})
