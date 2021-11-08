<script setup lang="ts">
import ReaderSentence from './ReaderSentence.vue'

interface Props {
  parsedSentences?: Array<any>,
  selectedWordSanitized?: string,
}

const props = withDefaults(defineProps<Props>(), {
  parsedSentences: []
})

</script>

<template>
	<p>
		<reader-sentence v-for="s in parsedSentences" :parsedSentence="s" :selectedWordSanitized="selectedWordSanitized" v-bind="$attrs"/>
	</p>
</template>

<style lang="stylus" scoped>
</style>
