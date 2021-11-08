<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { gParseRawText } from '@utils/reader/text-parsing.js'
import ReaderParagraph from './ReaderParagraph.vue'

interface Props {
  originalLanguage?: string
  rawText?: string
}

const props = withDefaults(defineProps<Props>(), {
  originalLanguage: 'de',
  rawText: "Und vor gut 70000 Jahren begannen Organismen der Art Homo sapiens mit dem Aufbau von noch komplexeren Strukturen namens Kulturen. Die Entwicklung dieser Kulturen nennen wir Geschichte.",
})

const parsedText = ref([])

const parse = () => {
	parsedText.value = [...gParseRawText(props.rawText)]
}

const selectedWordSanitized = ref('')

const handleSelectionUpdate = (selectionState) => {
	selectedWordSanitized.value = selectionState.wordSanitized
}

onMounted(parse)
onUpdated(parse)
</script>

<template>
	<div ref="text">
		<reader-paragraph
			v-for="paragraph in parsedText"
			:parsedSentences="paragraph"
			:selectedWordSanitized="selectedWordSanitized"
			@selectionUpdate="handleSelectionUpdate"
		/>
	</div>
</template>

<style lang="stylus" scoped>
</style>
