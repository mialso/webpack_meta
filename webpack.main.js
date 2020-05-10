const path = require('path');
const ProxyDependencyMainTemplateHookWebpackPlugin = require('./src/ProxyWebpackPlugin');

module.exports = {
	entry: './src/main/main.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new ProxyDependencyMainTemplateHookWebpackPlugin(),
	],
}
