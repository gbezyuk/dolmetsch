export const randIndex =
	(arr) =>
	Math.floor(Math.random() * arr.length)

export const randChoice =
	(arr) =>
	arr[randIndex(arr)]
