(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["debugItems"],{

/***/ "./src/debug/debug.js":
/*!****************************!*\
  !*** ./src/debug/debug.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.debug */ \"./src/debug/greeting.debug.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n\t_greeting_debug__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n]);\n\n\n\n//# sourceURL=webpack:///./src/debug/debug.js?");

/***/ }),

/***/ "./src/debug/greeting.debug.js":
/*!*************************************!*\
  !*** ./src/debug/greeting.debug.js ***!
  \*************************************/
/*! exports provided: greetingDebug, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greetingDebug\", function() { return greetingDebug; });\n// Proxy interface\nconst greetingDebug  = {\n\tapply(greeting) {\n\t\tconsole.log('greeting debug')\n\t\treturn greeting()\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t// TODO: how manage those constants\n\t['./src/main/greeting.js']: {\n\t\tgreeting: greetingDebug,\n\t},\n});\n\n\n//# sourceURL=webpack:///./src/debug/greeting.debug.js?");

/***/ })

}]);