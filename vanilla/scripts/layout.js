const primaryNavigationHTML = `
	<a href="/"><h1>Dolmetsch</h1></a>
	<hr>
	<a href="./index.html">about</a>
	<a href="https://github.com/gbezyuk/dolmetsch" target="_blank">GitHub</a>
	<hr>
	<a href="./reader.html"><strong>Reader</strong></a>
	<hr>
	<h2>Dict</h2>
	<a href="./dict-viewer.html">view/edit</a>
	<a href="./dict-export.html">export</a>
`
/* <a href="./dict-review.html">review</a> */

document.getElementById('primary-navigation').innerHTML = primaryNavigationHTML
