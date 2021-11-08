<script setup lang="ts">
import Centralizer from './Centralizer.vue'
import Logo from './header/Logo.vue'
import Navigation from './header/Navigation.vue'
import GitHubLink from './header/GitHubLink.vue'
</script>

<template>
<header>
	<centralizer>
		<logo/>
		<navigation></navigation>
		<git-hub-link></git-hub-link>
	</centralizer>
</header>
</template>

<style lang="stylus" scoped>
header
	height 4rem
	line-height 4rem
	background skyblue
	color white

	.centralizer
		max-width 1000px
		margin 0 auto
		display flex
		flex-flow row nowrap
		justify-content space-between
		align-items center
</style>
