<script setup lang="ts">
import Centralizer from '@layout/Centralizer.vue'
import { ref } from 'vue'
import sample from '@samples/german/harari-sapiens.txt'
import ReaderTextWebComponent from './ReaderText.js'
customElements.define('reader-text', ReaderTextWebComponent)

const originalLanguage = ref('de')
const rawText = ref(sample)

</script>

<template>
	<main>
		<centralizer>
			<h2>Reader Demo</h2>
			<reader-text :raw-text="rawText" :original-language="originalLanguage"/>
		</centralizer>
	</main>
</template>

<style>
</style>
