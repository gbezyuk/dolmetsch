<script setup lang="ts">
import Centralizer from '@layout/Centralizer.vue'
import { ref, onMounted, onUpdated } from 'vue'
import { initReader, fillTextNode } from '@utils/reader/dom-interaction.js'
import sample from '@samples/german/harari-sapiens.txt'
import { isTranslated } from '@utils/dict/dict.js'

const originalLanguage = ref('de')
const rawText = ref(sample)

const text = ref(null)

onMounted(() => {
	initReader(text.value, () => {})
	fillTextNode(text.value, rawText.value)
	renderDictPresenceStatus()
})

onUpdated(() => {
	fillTextNode(text.value, rawText.value)
	renderDictPresenceStatus()
})

function renderDictPresenceStatus () {
	[...text.value.getElementsByClassName('word-proper')].map($w => {
		const w = $w.innerText.toLowerCase()
		$w.classList.toggle('translated', isTranslated(originalLanguage.value, w))
	})
}

</script>

<template>
	<main>
		<centralizer>
			<h2>Reader Demo: pure Vanilla</h2>
			<div ref="text" id="text"></div>
		</centralizer>
	</main>
</template>

<style>
#text {
	/* max-width: 800px;
	margin: 2em auto; */
	font-size: 2.4rem;
	/* font-size: 0; */
}

	#text .paragraph.selected {
		/* border-color: #90ee9055; */
		background-color: #90ee9022;
	}

	#text .sentence.selected {
		/* border-color: #90ee90aa; */
		background-color: #90ee9044;
	}

	#text .paragraph,
	#text .sentence,
	#text .word {
		/* border: 1px solid transparent; */
		border-radius: .3em;
		transition: all ease-in-out .1s;
	}

	#text .word {
		/* font-size: 1rem; */
		display: inline; /* just inline for new reader, to allow text selection */
		margin-right: .3em;
		cursor: pointer;
		/* word-break: keep-all; */
	}
		/* #text *.selected {
			background-color: #90ee9015;
		} */

		#text .whitespaces {
			font-size: 0;
		}

		#text .word:hover > .word-proper {
			/* border-color: black; */
			background-color: goldenrod;
		}
		#text .word.selected > .word-proper,
		#text .word.occurence.selected > .word-proper {
			background-color: #90ee90;
		}
		#text .word.occurence > .word-proper {
			background-color: #90ee9044;
		}
		#text .word-proper.translated {
			text-decoration: underline;
			text-decoration-style: dashed;
			text-decoration-color: lightgray;
		}
</style>
