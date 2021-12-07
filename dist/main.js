/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addToDo.js":
/*!************************!*\
  !*** ./src/addToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDo": () => (/* binding */ addToDo)
/* harmony export */ });
/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory */ "./src/todoFactory.js");
/* Add method to prevent default on form(event) */



const addToDo = (category) => {

    if (document.getElementById('formtitle').value == "" || document.getElementById('formdate').value == "" || document.getElementById('formpriority').value == "") {
        alert("Please fill out every field.");
    } else {
        const newTodo = (0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(document.getElementById('formtitle').value, document.getElementById('formdate').value, document.getElementById('formpriority').value);
        category.push(newTodo);

        console.log(category[0]);
    }
};



/***/ }),

/***/ "./src/displayForm.js":
/*!****************************!*\
  !*** ./src/displayForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup)
/* harmony export */ });
const displayPopup = () => {
    document.getElementById('formpopup').style.display = "block";
    document.getElementById('modal').style.display = "block";
};



/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory)
/* harmony export */ });
const todoFactory = (title, date, priority) => {
    return { title, date, priority };
};



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
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");
/* harmony import */ var _displayForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayForm.js */ "./src/displayForm.js");
/* harmony import */ var _addToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToDo.js */ "./src/addToDo.js");




//const newtodo = todoFactory('wash dogs', 'tomorrow', 'big priority');

//console.log(newtodo.title);
//console.log(newtodo.date);

const projects = [];

const general = [];

projects.push(general);



const addbutton = document.querySelector('#addbutton');

addbutton.addEventListener("click", _displayForm_js__WEBPACK_IMPORTED_MODULE_1__.displayPopup);

const formbutton = document.querySelector('#formSubmit');


formbutton.addEventListener('click', event => {
    event.preventDefault;
    (0,_addToDo_js__WEBPACK_IMPORTED_MODULE_2__.addToDo)(general);
    console.log(general);
});






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFNEM7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLHlEQUFXO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0M7QUFDVDs7QUFFdkM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOztBQUVBLG9DQUFvQyx5REFBWTs7QUFFaEQ7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLG9EQUFPO0FBQ1g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvYWRkVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwbGF5Rm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBtZXRob2QgdG8gcHJldmVudCBkZWZhdWx0IG9uIGZvcm0oZXZlbnQpICovXG5cbmltcG9ydCB7IHRvZG9GYWN0b3J5IH0gZnJvbSBcIi4vdG9kb0ZhY3RvcnlcIjtcblxuY29uc3QgYWRkVG9EbyA9IChjYXRlZ29yeSkgPT4ge1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdGl0bGUnKS52YWx1ZSA9PSBcIlwiIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtZGF0ZScpLnZhbHVlID09IFwiXCIgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1wcmlvcml0eScpLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBvdXQgZXZlcnkgZmllbGQuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRmFjdG9yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXRpdGxlJykudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtZGF0ZScpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXByaW9yaXR5JykudmFsdWUpO1xuICAgICAgICBjYXRlZ29yeS5wdXNoKG5ld1RvZG8pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5WzBdKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBhZGRUb0RvIH07IiwiY29uc3QgZGlzcGxheVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5UG9wdXAgfTsiLCJjb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvRmFjdG9yeSB9IGZyb20gJy4vdG9kb0ZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZGlzcGxheVBvcHVwIH0gZnJvbSAnLi9kaXNwbGF5Rm9ybS5qcyc7XG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSAnLi9hZGRUb0RvLmpzJztcblxuLy9jb25zdCBuZXd0b2RvID0gdG9kb0ZhY3RvcnkoJ3dhc2ggZG9ncycsICd0b21vcnJvdycsICdiaWcgcHJpb3JpdHknKTtcblxuLy9jb25zb2xlLmxvZyhuZXd0b2RvLnRpdGxlKTtcbi8vY29uc29sZS5sb2cobmV3dG9kby5kYXRlKTtcblxuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgZ2VuZXJhbCA9IFtdO1xuXG5wcm9qZWN0cy5wdXNoKGdlbmVyYWwpO1xuXG5cblxuY29uc3QgYWRkYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGJ1dHRvbicpO1xuXG5hZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQb3B1cCk7XG5cbmNvbnN0IGZvcm1idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVN1Ym1pdCcpO1xuXG5cbmZvcm1idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQ7XG4gICAgYWRkVG9EbyhnZW5lcmFsKTtcbiAgICBjb25zb2xlLmxvZyhnZW5lcmFsKTtcbn0pO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==