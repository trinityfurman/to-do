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

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos)
/* harmony export */ });


const displayTodos = (projectArray, projectIndex) => {
    const thisArray = projectArray[projectIndex];
    console.log('working');
    const body = document.querySelector('#main');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
     thisArray.forEach(todo => {

        const div = document.createElement('div');
        div.textContent = todo.title;

        body.appendChild(div);
     });
};



/***/ }),

/***/ "./src/hideForm.js":
/*!*************************!*\
  !*** ./src/hideForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hidePopup": () => (/* binding */ hidePopup)
/* harmony export */ });
const hidePopup = () => {
    document.getElementById('formpopup').style.display = "none";
    document.getElementById('modal').style.display = "none";
};



/***/ }),

/***/ "./src/populateSidebar.js":
/*!********************************!*\
  !*** ./src/populateSidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateSidebar": () => (/* binding */ populateSidebar)
/* harmony export */ });
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");



const populateSidebar = (projectArray) => {
    const sidebar = document.querySelector('#sidebar');
    const header = document.createElement('div');
    header.textContent = 'General';
    header.classList.add('projectHeaders');
    header.setAttribute('data-index', 0);
    header.addEventListener("click", function() {
        (0,_displayTodos__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(projectArray, 0)
    });
    sidebar.appendChild(header);

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
/* harmony import */ var _populateSidebar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateSidebar.js */ "./src/populateSidebar.js");
/* harmony import */ var _displayTodos_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayTodos.js */ "./src/displayTodos.js");
/* harmony import */ var _hideForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hideForm.js */ "./src/hideForm.js");








//TODO: Figure out how to prevent page from refreshing when form is submitted

//const newtodo = todoFactory('wash dogs', 'tomorrow', 'big priority');

//console.log(newtodo.title);
//console.log(newtodo.date);

// Create array of projects
let projects = [];

// Create array for 'general' project
let general = [];

// Add 'general' array to projects array
projects.push(general);


let number = -1;


const addbutton = document.querySelector('#addbutton');

addbutton.addEventListener("click", _displayForm_js__WEBPACK_IMPORTED_MODULE_1__.displayPopup);

const formbutton = document.querySelector('#formSubmit');



formbutton.addEventListener('click', function(event) {

    event.preventDefault();

    number++;
    (0,_addToDo_js__WEBPACK_IMPORTED_MODULE_2__.addToDo)(general);

    console.log(number);
    console.log(general[number]);
    (0,_hideForm_js__WEBPACK_IMPORTED_MODULE_5__.hidePopup)();

    const thisForm = document.getElementById("form");
    thisForm.reset();
}); 

(0,_populateSidebar_js__WEBPACK_IMPORTED_MODULE_3__.populateSidebar)(projects);

/* // Example code for how to load page
menuButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    displayTodos(0);
});
*/









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFNEM7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sd0JBQXdCLHlEQUFXO0FBQ25DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDhDOzs7QUFHOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFZO0FBQ3BCLEtBQUs7QUFDTDs7QUFFQTs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7OztBQ2hCM0I7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0M7QUFDVDtBQUNnQjtBQUNOO0FBQ1A7OztBQUcxQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUEsb0NBQW9DLHlEQUFZOztBQUVoRDs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxvREFBTzs7QUFFWDtBQUNBO0FBQ0EsSUFBSSx1REFBUzs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvRUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGRUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlUb2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oaWRlRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wb3B1bGF0ZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb0ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgbWV0aG9kIHRvIHByZXZlbnQgZGVmYXVsdCBvbiBmb3JtKGV2ZW50KSAqL1xuXG5pbXBvcnQgeyB0b2RvRmFjdG9yeSB9IGZyb20gXCIuL3RvZG9GYWN0b3J5XCI7XG5cbmNvbnN0IGFkZFRvRG8gPSAoY2F0ZWdvcnkpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXRpdGxlJykudmFsdWUgPT0gXCJcIiB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybWRhdGUnKS52YWx1ZSA9PSBcIlwiIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcHJpb3JpdHknKS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IGV2ZXJ5IGZpZWxkLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm10aXRsZScpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybWRhdGUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1wcmlvcml0eScpLnZhbHVlKTtcbiAgICAgICAgY2F0ZWdvcnkucHVzaChuZXdUb2RvKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBhZGRUb0RvIH07IiwiY29uc3QgZGlzcGxheVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5UG9wdXAgfTsiLCJcblxuY29uc3QgZGlzcGxheVRvZG9zID0gKHByb2plY3RBcnJheSwgcHJvamVjdEluZGV4KSA9PiB7XG4gICAgY29uc3QgdGhpc0FycmF5ID0gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF07XG4gICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgICB0aGlzQXJyYXkuZm9yRWFjaCh0b2RvID0+IHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgIH0pO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVRvZG9zIH07IiwiY29uc3QgaGlkZVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuZXhwb3J0IHsgaGlkZVBvcHVwIH07IiwiaW1wb3J0IHsgZGlzcGxheVRvZG9zIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9zXCI7XG5cblxuY29uc3QgcG9wdWxhdGVTaWRlYmFyID0gKHByb2plY3RBcnJheSkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdHZW5lcmFsJztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcnMnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgMCk7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZGlzcGxheVRvZG9zKHByb2plY3RBcnJheSwgMClcbiAgICB9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbn07XG5cbmV4cG9ydCB7IHBvcHVsYXRlU2lkZWJhciB9O1xuIiwiY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5IH07XG59O1xuXG5leHBvcnQgeyB0b2RvRmFjdG9yeSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tICcuL3RvZG9GYWN0b3J5LmpzJztcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4vZGlzcGxheUZvcm0uanMnO1xuaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gJy4vYWRkVG9Eby5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVNpZGViYXIgfSBmcm9tICcuL3BvcHVsYXRlU2lkZWJhci5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tICcuL2Rpc3BsYXlUb2Rvcy5qcyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAgfSBmcm9tICcuL2hpZGVGb3JtLmpzJztcblxuXG4vL1RPRE86IEZpZ3VyZSBvdXQgaG93IHRvIHByZXZlbnQgcGFnZSBmcm9tIHJlZnJlc2hpbmcgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxuXG4vL2NvbnN0IG5ld3RvZG8gPSB0b2RvRmFjdG9yeSgnd2FzaCBkb2dzJywgJ3RvbW9ycm93JywgJ2JpZyBwcmlvcml0eScpO1xuXG4vL2NvbnNvbGUubG9nKG5ld3RvZG8udGl0bGUpO1xuLy9jb25zb2xlLmxvZyhuZXd0b2RvLmRhdGUpO1xuXG4vLyBDcmVhdGUgYXJyYXkgb2YgcHJvamVjdHNcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG4vLyBDcmVhdGUgYXJyYXkgZm9yICdnZW5lcmFsJyBwcm9qZWN0XG5sZXQgZ2VuZXJhbCA9IFtdO1xuXG4vLyBBZGQgJ2dlbmVyYWwnIGFycmF5IHRvIHByb2plY3RzIGFycmF5XG5wcm9qZWN0cy5wdXNoKGdlbmVyYWwpO1xuXG5cbmxldCBudW1iZXIgPSAtMTtcblxuXG5jb25zdCBhZGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkYnV0dG9uJyk7XG5cbmFkZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVBvcHVwKTtcblxuY29uc3QgZm9ybWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtU3VibWl0Jyk7XG5cblxuXG5mb3JtYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBudW1iZXIrKztcbiAgICBhZGRUb0RvKGdlbmVyYWwpO1xuXG4gICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICBjb25zb2xlLmxvZyhnZW5lcmFsW251bWJlcl0pO1xuICAgIGhpZGVQb3B1cCgpO1xuXG4gICAgY29uc3QgdGhpc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgdGhpc0Zvcm0ucmVzZXQoKTtcbn0pOyBcblxucG9wdWxhdGVTaWRlYmFyKHByb2plY3RzKTtcblxuLyogLy8gRXhhbXBsZSBjb2RlIGZvciBob3cgdG8gbG9hZCBwYWdlXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBkaXNwbGF5VG9kb3MoMCk7XG59KTtcbiovXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9