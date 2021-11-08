<script setup lang="ts">
import Centralizer from '@layout/Centralizer.vue'
import ReaderText from '@components/ReaderText.vue'
import { ref } from 'vue'
import sample from '@samples/german/harari-sapiens.txt'

const originalLanguage = ref('de')
const rawText = ref(sample)
</script>

<template>
	<main>
		<centralizer>
			<h2>Reader Demo</h2>
			<reader-text
				:originalLanguage="originalLanguage"
				:rawText="rawText"
			/>
		</centralizer>
	</main>
</template>

<style lang="stylus" scoped>
</style>
