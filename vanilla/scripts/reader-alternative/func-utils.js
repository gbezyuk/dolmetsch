export function sequence () {
	const functionsToCall = [...arguments]
	return function () {
		for (let f of functionsToCall) {
			f.apply(f, arguments)
		}
	}
}
