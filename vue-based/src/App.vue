<script setup lang="ts">
import DolmetschHeader from '@layout/Header.vue'
// import DolmetschFooter from './components/layout/Footer.vue'
</script>

<template>
  <dolmetsch-header/>
  <router-view></router-view>
  <!-- <dolmetsch-footer/> -->
</template>

<style lang="stylus">
html, body
	margin 0
	padding 0
	font-size 10px

#app
	font-family Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale

	*
		box-sizing border-box
</style>
