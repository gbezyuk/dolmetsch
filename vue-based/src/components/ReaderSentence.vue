<script setup lang="ts">
import { defineEmits } from 'vue'
import ReaderLexeme from './ReaderLexeme.vue'

interface Props {
  parsedSentence?: Array<string>,
  selectedWordSanitized?: string
}

const props = withDefaults(defineProps<Props>(), {
  parsedSentence: [],
})

</script>

<template>
	<span class="sentence">
		<reader-lexeme v-for="lexeme in parsedSentence" :lexeme="lexeme" :selectedWordSanitized="selectedWordSanitized" v-bind="$attrs"/>
	</span>
</template>

<style lang="stylus" scoped>
span
	font-size 2.4rem
</style>
