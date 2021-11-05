const primaryNavigationHTML = `
	<a href="/"><h2>Dolmetsch</h2></a>
	<hr>
	<a href="./index.html">about</a>
	<a href="https://github.com/gbezyuk/dolmetsch" target="_blank">GitHub</a>
	<hr>
	<a href="./reader.html"><strong>Reader</strong></a>
	<hr>
	<h4>Dict</h4>
	<a href="./dict-viewer.html">view/edit</a>
	<a href="./dict-export.html">export</a>
`
/* <a href="./dict-review.html">review</a> */

document.getElementById('primary-navigation').innerHTML = primaryNavigationHTML
