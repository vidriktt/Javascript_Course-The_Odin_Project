/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/myName.js":
/*!***********************!*\
  !*** ./src/myName.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const myName = (name) => `Hi! My name is ${name}`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myName);


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
    console.log("I get called from print.js!");
    // cosnole.log("I get called from print.js!");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myName */ "./src/myName.js");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");


// import "./style.css";
// import Icon from "./icon.png";
// import Data from "./data.xml";
// import Notes from "./data.csv";
// import toml from "./data.toml";
// import yaml from "./data.yaml";
// import json from "./data.json5";

// console.log(toml.title); // output `TOML Example`
// console.log(toml.owner.name); // output `Tom Preston-Werner`

// console.log(yaml.title); // output `YAML Example`
// console.log(yaml.owner.name); // output `Tom Preston-Werner`

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
    const element = document.createElement("div");
    const btn = document.createElement("button");

    // use your function!
    element.textContent = (0,_myName__WEBPACK_IMPORTED_MODULE_0__["default"])("Cody");

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"];

    element.appendChild(btn);

    // element.classList.add("hello");

    // // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    // console.log(Data);
    // console.log(Notes);

    return element;
}

document.body.appendChild(component());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDLEtBQUs7O0FBRWhELGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QixpQ0FBaUM7O0FBRWpDLDRCQUE0QjtBQUM1QixpQ0FBaUM7O0FBRWpDLDRCQUE0QjtBQUM1QixpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtREFBTTs7QUFFaEM7QUFDQSxrQkFBa0IsOENBQU87O0FBRXpCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbXlOYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlOYW1lID0gKG5hbWUpID0+IGBIaSEgTXkgbmFtZSBpcyAke25hbWV9YDtcblxuZXhwb3J0IGRlZmF1bHQgbXlOYW1lO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkkgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIVwiKTtcbiAgICAvLyBjb3Nub2xlLmxvZyhcIkkgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzIVwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG15TmFtZSBmcm9tIFwiLi9teU5hbWVcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50XCI7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy8gaW1wb3J0IEljb24gZnJvbSBcIi4vaWNvbi5wbmdcIjtcbi8vIGltcG9ydCBEYXRhIGZyb20gXCIuL2RhdGEueG1sXCI7XG4vLyBpbXBvcnQgTm90ZXMgZnJvbSBcIi4vZGF0YS5jc3ZcIjtcbi8vIGltcG9ydCB0b21sIGZyb20gXCIuL2RhdGEudG9tbFwiO1xuLy8gaW1wb3J0IHlhbWwgZnJvbSBcIi4vZGF0YS55YW1sXCI7XG4vLyBpbXBvcnQganNvbiBmcm9tIFwiLi9kYXRhLmpzb241XCI7XG5cbi8vIGNvbnNvbGUubG9nKHRvbWwudGl0bGUpOyAvLyBvdXRwdXQgYFRPTUwgRXhhbXBsZWBcbi8vIGNvbnNvbGUubG9nKHRvbWwub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuXG4vLyBjb25zb2xlLmxvZyh5YW1sLnRpdGxlKTsgLy8gb3V0cHV0IGBZQU1MIEV4YW1wbGVgXG4vLyBjb25zb2xlLmxvZyh5YW1sLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcblxuLy8gY29uc29sZS5sb2coanNvbi50aXRsZSk7IC8vIG91dHB1dCBgSlNPTjUgRXhhbXBsZWBcbi8vIGNvbnNvbGUubG9nKGpzb24ub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIC8vIHVzZSB5b3VyIGZ1bmN0aW9uIVxuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBteU5hbWUoXCJDb2R5XCIpO1xuXG4gICAgYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlIVwiO1xuICAgIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhlbGxvXCIpO1xuXG4gICAgLy8gLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICAgIC8vIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIG15SWNvbi5zcmMgPSBJY29uO1xuXG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gICAgLy8gY29uc29sZS5sb2coRGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coTm90ZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9