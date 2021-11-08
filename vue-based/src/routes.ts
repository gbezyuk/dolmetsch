export default  [
    // { path: '/', component: () => import('@pages/index.vue') },
	{ path: '/', redirect: '/reader' },

	// { path: '/about', component: () => import('@pages/about.vue') },

	{ path: '/reader', redirect: '/reader/vanilla' },
    { path: '/reader/vue', component: () => import('@pages/reader/vue.vue') },
	{ path: '/reader/vanilla', component: () => import('@pages/reader/vanilla.vue') },
	{ path: '/reader/webcomponent', component: () => import('@pages/reader/webcomponent.vue') },

	// { path: '/vocabulary', component: () => import('@pages/vocabulary.vue') },

	// { path: '/exercises', component: () => import('@pages/exercises.vue') },
]
