<script setup lang="ts">
const links = [
	// {
	// 	url: '/about',
	// 	text: 'About',
	// },
	{
		url: '/reader/vue',
		text: 'Reader:Vue',
	},
	{
		url: '/reader/vanilla',
		text: 'Reader:Vanilla',
	},
	{
		url: '/reader/webcomponent',
		text: 'Reader:WebComponent',
	},
	// {
	// 	url: '/vocabulary',
	// 	text: 'Vocabulary',
	// },
	// {
	// 	url: '/exercises',
	// 	text: 'Exercises',
	// },
]
</script>

<template>
	<nav>
		<a v-for="link in links" :href="link.url">{{ link.text }}</a>
	</nav>
</template>

<style lang="stylus" scoped>
nav
	flex-grow 1
	display flex
	flex-flow row nowrap
	justify-content space-evenly
	align-items center
	a
		color white
		text-decoration none
		font-size 1.8rem
</style>
