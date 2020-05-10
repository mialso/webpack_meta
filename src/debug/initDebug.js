import { DEBUG_GLOB_KEY, DEBUG_LOG, DEBUG_READY_PROMISE } from './constants';

const urlParams = new URLSearchParams(window.location.search);
const hasDebugLog = urlParams.get(DEBUG_LOG);

function setGlobalDebug(global) {

	global[DEBUG_READY_PROMISE] = import(/* webpackChunkName: "debugItems" */ './debug.js')
		.then((debugItems) => {
			global[DEBUG_GLOB_KEY] = Object.assign({}, ...debugItems.default);
		})
}

hasDebugLog && setGlobalDebug(window)
