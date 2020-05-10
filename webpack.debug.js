const path = require('path');

module.exports = {
	entry: './src/debug/initDebug.js',
	mode: 'development',
	output: {
		filename: 'initDebug.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [],
}
