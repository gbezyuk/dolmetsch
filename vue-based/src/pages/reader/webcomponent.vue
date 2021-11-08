<script setup lang="ts">
import Centralizer from '@layout/Centralizer.vue'
import { ref } from 'vue'
import sample from '@samples/german/harari-sapiens.txt'
import ReaderTextWebComponent from './ReaderText.js'
customElements.define('reader-text-webcomponent', ReaderTextWebComponent)

const originalLanguage = ref('de')
const rawText = ref(sample)

</script>

<template>
	<main>
		<centralizer>
			<h2>Reader Demo: Vanilla/WebComponent</h2>
			<reader-text-webcomponent :raw-text="rawText" :original-language="originalLanguage"/>
		</centralizer>
	</main>
</template>

<style>
</style>
