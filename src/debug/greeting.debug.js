// Proxy interface
export const greetingDebug  = {
	apply(greeting) {
		console.log('greeting debug')
		return greeting()
	}
}

export default {
	// TODO: how manage those constants
	['./src/main/greeting.js']: {
		greeting: greetingDebug,
	},
}
