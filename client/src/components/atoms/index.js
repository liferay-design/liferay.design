// Imports and exports all components in atoms folder

const req = require.context('.', true, /\.\/[^/]+\/index\.js$/)

req.keys().forEach(key => {
	const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
	module.exports[componentName] = req(key).default
})
