/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			
/******/ 			var id = Object.keys(installedModules).find(key => installedModules[key].exports === exports)
/******/ 			var globalDebug = window.debugUtil;
/******/ 			var itemDebug = globalDebug && globalDebug[id] && globalDebug[id][name];
/******/ 			function setDebug(getter) { return new Proxy(getter, itemDebug) };
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: !!itemDebug ? setDebug(getter) : getter })
/******/ 	;
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	if (window.debugReadyPromise) {
/******/ 	window.debugReadyPromise.then(() => {
/******/
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.js");
/******/ 	})
/******/ 	}
/******/ 	else {
/******/
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.js");
/******/ 	}
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action/start.js":
/*!*****************************!*\
  !*** ./src/action/start.js ***!
  \*****************************/
/*! exports provided: start, handleStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleStart\", function() { return handleStart; });\nfunction start() {\n\treturn 'Start';\n}\n\nfunction handleStart() {\n\tconsole.log('start here');\n}\n\n\n//# sourceURL=webpack:///./src/action/start.js?");

/***/ }),

/***/ "./src/main/greeting.js":
/*!******************************!*\
  !*** ./src/main/greeting.js ***!
  \******************************/
/*! exports provided: greeting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greeting\", function() { return greeting; });\nfunction greeting() {\n\treturn 'Hello my dear';\n}\n\n\n//# sourceURL=webpack:///./src/main/greeting.js?");

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting */ \"./src/main/greeting.js\");\n/* harmony import */ var _action_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/start */ \"./src/action/start.js\");\n\n\n\nfunction text(getText) {\n\tconst element = document.createElement('div');\n\n\telement.innerHTML = getText();\n\n\treturn element;\n}\n\nfunction button(getLabel) {\n\tconst element = document.createElement('button');\n\telement.onclick = _action_start__WEBPACK_IMPORTED_MODULE_1__[\"handleStart\"];\n\telement.innerHTML = getLabel();\n\treturn element;\n}\n\ndocument.body.appendChild(text(_greeting__WEBPACK_IMPORTED_MODULE_0__[\"greeting\"]))\ndocument.body.appendChild(button(_action_start__WEBPACK_IMPORTED_MODULE_1__[\"start\"]))\n\n\n//# sourceURL=webpack:///./src/main/main.js?");

/***/ })

/******/ });