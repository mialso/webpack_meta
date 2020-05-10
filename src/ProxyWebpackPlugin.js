const Template = require('webpack/lib/Template');

const DEBUG_GLOB_KEY = 'debugUtil';
const DEBUG_READY_PROMISE = 'debugReadyPromise'
const PLUGIN_NAME = 'ProxyDependencyMainTemplateHookWebpackPlugin';

class ProxyDependencyMainTemplateHookWebpackPlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap(
			'ProxyWebpackPlugin',
			(compilation) => {
				const mainTemplate = compilation.mainTemplate;
				mainTemplate.hooks.requireExtensions.tap(PLUGIN_NAME, (source) => {
					// additional logic
					const FIND_ID = 'var id = Object.keys(installedModules).find(key => installedModules[key].exports === exports)';
					const SET_GLOBAL_DEBUG = `var globalDebug = window.${DEBUG_GLOB_KEY};`
					const CHECK_DEBUG_AVAILABLE = 'var itemDebug = globalDebug && globalDebug[id] && globalDebug[id][name];'
					const SET_DEBUG_IF_AVAILABLE = 'function setDebug(getter) { return new Proxy(getter, itemDebug) };'
					const IMPROVED_SET_GETTER = 'Object.defineProperty(exports, name, { enumerable: true, get: !!itemDebug ? setDebug(getter) : getter })';

					// current logic
					const SET_GETTER = 'Object.defineProperty(exports, name, { enumerable: true, get: getter })';
					const sourceStringArray = source.split(SET_GETTER);

					// combine previous logic with new
					const resultItemsArray = [
						sourceStringArray[0],
						// I wonder which is better - Template.indent or simple tab
						`\t\t${FIND_ID}`,
						Template.indent(Template.indent(SET_GLOBAL_DEBUG)),
						Template.indent(Template.indent(CHECK_DEBUG_AVAILABLE)),
						Template.indent(Template.indent(SET_DEBUG_IF_AVAILABLE)),
						`\t\t${IMPROVED_SET_GETTER}`,
						sourceStringArray[1],
					];

					return Template.asString(resultItemsArray);
				});
				mainTemplate.hooks.startup.tap(PLUGIN_NAME, (source, chunk, hash) => {
					// additional logic
					const DEBUG_PROMISE_CHECK = `if (window.${DEBUG_READY_PROMISE}) {`;
					const DEBUG_DEFER = `window.${DEBUG_READY_PROMISE}.then(() => {`;
					const DEBUG_DEFER_WRAP = '})';
					const NORMAL_FLOW = 'else {';
					const NORMAL_WRAP = '}'

					// current logic
					const LOAD_COMMENT = '// Load entry module and return exports';
					const sourceStringArray = source.split(LOAD_COMMENT);
					const LOAD_ENTRY_COMMAND = sourceStringArray[1];

					const resultItemsArray = [
						LOAD_COMMENT,
						DEBUG_PROMISE_CHECK,
						DEBUG_DEFER,
						LOAD_ENTRY_COMMAND,
						DEBUG_DEFER_WRAP,
						NORMAL_WRAP,
						NORMAL_FLOW,
						LOAD_ENTRY_COMMAND,
						NORMAL_WRAP,
					];

					return Template.asString(resultItemsArray);
				});
			},
		);
	}
}

module.exports = ProxyDependencyMainTemplateHookWebpackPlugin;
