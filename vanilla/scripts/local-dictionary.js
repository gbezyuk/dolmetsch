const cache = {}

export const requestLocalTranslation = (word) => {
	if (!word) {
		return
	}
	if (word in cache) {
		return cache[word] ? Promise.resolve(cache[word]) : Promise.reject(cache[word])
	}
	return fetch(`/scripts/german-tools/local-dictionary/${word.toLocaleLowerCase()}.json`)
		.then((response) => {
			if (response.ok) {
				return cache[word] = response.json()
			} else {
				cache[word] = null
				throw new Error('Network response was not OK', response)
			}
		})
	.catch(response => console.log('no local dict entry', response))
}