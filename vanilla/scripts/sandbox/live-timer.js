console.log("Do Androids Dream of Electric Sheep?")

import LiveTimer from "./components/LiveTimer.js"

liveTimer.addEventListener('tick', (now) => {
	console.log('tick!', now.detail)
})
