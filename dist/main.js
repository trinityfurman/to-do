/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _projectFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFactory */ "./src/projectFactory.js");


const addProject = (category) => {
    if (document.getElementById('projecttitle').value == "") {
        alert("Please fill out every field.");
    } else {
        const newProject = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(document.getElementById('projecttitle').value, []);
        category.push(newProject);
    }
};





/***/ }),

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
    document.getElementById('form').style.display = "block";
    document.getElementById('modal').style.display = "block";
};



/***/ }),

/***/ "./src/displayForm2.js":
/*!*****************************!*\
  !*** ./src/displayForm2.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPopup2": () => (/* binding */ displayPopup2)
/* harmony export */ });
const displayPopup2 = () => {
    document.getElementById('projectform').style.display = "block";
    document.getElementById('modalTwo').style.display = "block";
    console.log('display working');
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


const displayTodos = (project) => {

    const body = document.querySelector('#main');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    console.log('working okay');
     project.todos.forEach(todo => {

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
    document.getElementById('form').style.display = "none";
    document.getElementById('modal').style.display = "none";
};



/***/ }),

/***/ "./src/hideForm2.js":
/*!**************************!*\
  !*** ./src/hideForm2.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hidePopup2": () => (/* binding */ hidePopup2)
/* harmony export */ });
const hidePopup2 = () => {
    document.getElementById('projectform').style.display = "none";
    document.getElementById('modalTwo').style.display = "none";
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
    const sidebar = document.querySelector('#sidebarBody');

    while (sidebar.firstChild) {
        sidebar.removeChild(sidebar.firstChild);
    }

    // Cycle through array of project OBJECTS
    projectArray.forEach(project => {
        const header = document.createElement('div');
        header.classList.add('projectHeaders');
        //header.setAttribute('data-index', projectArray.indexOf(project));
        header.addEventListener("click", function() {
            (0,_displayTodos__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(project);
            console.log('working');
        });
        header.textContent = project.title;
        sidebar.appendChild(header);

    });

    /*const header = document.createElement('div');
    header.textContent = 'General';
    header.classList.add('projectHeaders');
    header.setAttribute('data-index', 0);
    header.addEventListener("click", function() {
        displayTodos(projectArray, 0)
    });
    sidebar.appendChild(header);*/

};




/***/ }),

/***/ "./src/projectFactory.js":
/*!*******************************!*\
  !*** ./src/projectFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const projectFactory = (title, todos) => {
    return { title, todos };
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
/* harmony import */ var _displayForm2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayForm2.js */ "./src/displayForm2.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _hideForm2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hideForm2.js */ "./src/hideForm2.js");
/* harmony import */ var _projectFactory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projectFactory.js */ "./src/projectFactory.js");












//TODO: 1. Add ability to add new projects; 2. Have projects populate in list when adding todo

//const newtodo = todoFactory('wash dogs', 'tomorrow', 'big priority');

//console.log(newtodo.title);
//console.log(newtodo.date);




// Create array of projects
let projectArray = [];

// Create array for 'general' project
//let general = [];

// Add 'general' array to projects array
//projectArray.push(general);

// Create array of project titles
//let projectTitles = [];

// Create first project object: 'general'
const general = (0,_projectFactory_js__WEBPACK_IMPORTED_MODULE_9__.projectFactory)('general', []);

projectArray.push(general);





let number = -1;


const addbutton = document.querySelector('#addbutton');

addbutton.addEventListener("click", _displayForm_js__WEBPACK_IMPORTED_MODULE_1__.displayPopup);

const formbutton = document.querySelector('#formSubmit');

const projectbutton = document.querySelector('#projectbutton');

projectbutton.addEventListener('click', _displayForm2_js__WEBPACK_IMPORTED_MODULE_6__.displayPopup2);

const projectsubmit = document.querySelector('#projectSubmit');


// Add todo to 'general' array when clicked
formbutton.addEventListener('click', function(event) {

    event.preventDefault();

    // Keep track of how many items are added (just to test)
    number++;
    (0,_addToDo_js__WEBPACK_IMPORTED_MODULE_2__.addToDo)(projectArray[0].todos);

    console.log(number);
    console.log(projectArray[0].todos);
    (0,_hideForm_js__WEBPACK_IMPORTED_MODULE_5__.hidePopup)();

    const thisForm = document.getElementById("form");
    thisForm.reset();
}); 

projectsubmit.addEventListener('click', function(event) {
    event.preventDefault();

    (0,_addProject_js__WEBPACK_IMPORTED_MODULE_7__.addProject)(projectArray);
    console.log(projectArray[1]);

    (0,_hideForm2_js__WEBPACK_IMPORTED_MODULE_8__.hidePopup2)();

    const thisForm = document.getElementById("projectform");
    thisForm.reset();

    //repopulate sidebar w new project title

    (0,_populateSidebar_js__WEBPACK_IMPORTED_MODULE_3__.populateSidebar)(projectArray);


});

(0,_populateSidebar_js__WEBPACK_IMPORTED_MODULE_3__.populateSidebar)(projectArray);

/* // Example code for how to load page
menuButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    displayTodos(0);
});
*/

// Practice!

/*let practiceArray = [];

let practiceGeneral = {title: 'general', todos: [], };

practiceArray.push(practiceGeneral);

practiceArray[0].todos.push({title: 'study', date: 'tomorrow'});


console.log(practiceArray[0].todos[0].title);*/








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTiwyQkFBMkIsK0RBQWM7QUFDekM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRTRDOztBQUU1Qzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3Qix5REFBVztBQUNuQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDhDOzs7QUFHOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBWTtBQUN4QjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQzs7QUFFaEM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7QUNuQzNCO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNDO0FBQ1Q7QUFDZ0I7QUFDTjtBQUNQO0FBQ1E7QUFDTDtBQUNEO0FBQ1M7OztBQUdyRCw0Q0FBNEM7O0FBRTVDOztBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixrRUFBYzs7QUFFOUI7Ozs7OztBQU1BOzs7QUFHQTs7QUFFQSxvQ0FBb0MseURBQVk7O0FBRWhEOztBQUVBOztBQUVBLHdDQUF3QywyREFBYTs7QUFFckQ7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQU87O0FBRVg7QUFDQTtBQUNBLElBQUksdURBQVM7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQSxJQUFJLDBEQUFVO0FBQ2Q7O0FBRUEsSUFBSSx5REFBVTs7QUFFZDtBQUNBOztBQUVBOztBQUVBLElBQUksb0VBQWU7OztBQUduQixDQUFDOztBQUVELG9FQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUI7O0FBRXZCOztBQUVBLDZCQUE2QixpQ0FBaUM7OztBQUc5RCw2Q0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheUZvcm0yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlUb2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oaWRlRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oaWRlRm9ybTIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcG9wdWxhdGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9wcm9qZWN0RmFjdG9yeVwiO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGUnKS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IGV2ZXJ5IGZpZWxkLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3R0aXRsZScpLnZhbHVlLCBbXSk7XG4gICAgICAgIGNhdGVnb3J5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxufTtcblxuXG5cbmV4cG9ydCB7IGFkZFByb2plY3QgfTsiLCIvKiBBZGQgbWV0aG9kIHRvIHByZXZlbnQgZGVmYXVsdCBvbiBmb3JtKGV2ZW50KSAqL1xuXG5pbXBvcnQgeyB0b2RvRmFjdG9yeSB9IGZyb20gXCIuL3RvZG9GYWN0b3J5XCI7XG5cbmNvbnN0IGFkZFRvRG8gPSAoY2F0ZWdvcnkpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXRpdGxlJykudmFsdWUgPT0gXCJcIiB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybWRhdGUnKS52YWx1ZSA9PSBcIlwiIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcHJpb3JpdHknKS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IGV2ZXJ5IGZpZWxkLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm10aXRsZScpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybWRhdGUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1wcmlvcml0eScpLnZhbHVlKTtcbiAgICAgICAgY2F0ZWdvcnkucHVzaChuZXdUb2RvKTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBhZGRUb0RvIH07IiwiY29uc3QgZGlzcGxheVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVBvcHVwIH07IiwiY29uc3QgZGlzcGxheVBvcHVwMiA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdGZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFR3bycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgY29uc29sZS5sb2coJ2Rpc3BsYXkgd29ya2luZycpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVBvcHVwMiB9OyIsIlxuXG5jb25zdCBkaXNwbGF5VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnd29ya2luZyBva2F5Jyk7XG4gICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgIH0pO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVRvZG9zIH07IiwiY29uc3QgaGlkZVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmV4cG9ydCB7IGhpZGVQb3B1cCB9OyIsImNvbnN0IGhpZGVQb3B1cDIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFR3bycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmV4cG9ydCB7IGhpZGVQb3B1cDIgfTsiLCJpbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb3NcIjtcblxuXG5jb25zdCBwb3B1bGF0ZVNpZGViYXIgPSAocHJvamVjdEFycmF5KSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyQm9keScpO1xuXG4gICAgd2hpbGUgKHNpZGViYXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKHNpZGViYXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gQ3ljbGUgdGhyb3VnaCBhcnJheSBvZiBwcm9qZWN0IE9CSkVDVFNcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVycycpO1xuICAgICAgICAvL2hlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSk7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd29ya2luZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgfSk7XG5cbiAgICAvKmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdHZW5lcmFsJztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcnMnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgMCk7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZGlzcGxheVRvZG9zKHByb2plY3RBcnJheSwgMClcbiAgICB9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhlYWRlcik7Ki9cblxufTtcblxuZXhwb3J0IHsgcG9wdWxhdGVTaWRlYmFyIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgdG9kb3MpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgdG9kb3MgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RGYWN0b3J5IH07IiwiY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5IH07XG59O1xuXG5leHBvcnQgeyB0b2RvRmFjdG9yeSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tICcuL3RvZG9GYWN0b3J5LmpzJztcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4vZGlzcGxheUZvcm0uanMnO1xuaW1wb3J0IHsgYWRkVG9EbyB9IGZyb20gJy4vYWRkVG9Eby5qcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZVNpZGViYXIgfSBmcm9tICcuL3BvcHVsYXRlU2lkZWJhci5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tICcuL2Rpc3BsYXlUb2Rvcy5qcyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAgfSBmcm9tICcuL2hpZGVGb3JtLmpzJztcbmltcG9ydCB7IGRpc3BsYXlQb3B1cDIgfSBmcm9tICcuL2Rpc3BsYXlGb3JtMi5qcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9hZGRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGhpZGVQb3B1cDIgfSBmcm9tICcuL2hpZGVGb3JtMi5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9IGZyb20gJy4vcHJvamVjdEZhY3RvcnkuanMnO1xuXG5cbi8vVE9ETzogMS4gQWRkIGFiaWxpdHkgdG8gYWRkIG5ldyBwcm9qZWN0czsgMi4gSGF2ZSBwcm9qZWN0cyBwb3B1bGF0ZSBpbiBsaXN0IHdoZW4gYWRkaW5nIHRvZG9cblxuLy9jb25zdCBuZXd0b2RvID0gdG9kb0ZhY3RvcnkoJ3dhc2ggZG9ncycsICd0b21vcnJvdycsICdiaWcgcHJpb3JpdHknKTtcblxuLy9jb25zb2xlLmxvZyhuZXd0b2RvLnRpdGxlKTtcbi8vY29uc29sZS5sb2cobmV3dG9kby5kYXRlKTtcblxuXG5cblxuLy8gQ3JlYXRlIGFycmF5IG9mIHByb2plY3RzXG5sZXQgcHJvamVjdEFycmF5ID0gW107XG5cbi8vIENyZWF0ZSBhcnJheSBmb3IgJ2dlbmVyYWwnIHByb2plY3Rcbi8vbGV0IGdlbmVyYWwgPSBbXTtcblxuLy8gQWRkICdnZW5lcmFsJyBhcnJheSB0byBwcm9qZWN0cyBhcnJheVxuLy9wcm9qZWN0QXJyYXkucHVzaChnZW5lcmFsKTtcblxuLy8gQ3JlYXRlIGFycmF5IG9mIHByb2plY3QgdGl0bGVzXG4vL2xldCBwcm9qZWN0VGl0bGVzID0gW107XG5cbi8vIENyZWF0ZSBmaXJzdCBwcm9qZWN0IG9iamVjdDogJ2dlbmVyYWwnXG5jb25zdCBnZW5lcmFsID0gcHJvamVjdEZhY3RvcnkoJ2dlbmVyYWwnLCBbXSk7XG5cbnByb2plY3RBcnJheS5wdXNoKGdlbmVyYWwpO1xuXG5cblxuXG5cbmxldCBudW1iZXIgPSAtMTtcblxuXG5jb25zdCBhZGRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkYnV0dG9uJyk7XG5cbmFkZGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVBvcHVwKTtcblxuY29uc3QgZm9ybWJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtU3VibWl0Jyk7XG5cbmNvbnN0IHByb2plY3RidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdGJ1dHRvbicpO1xuXG5wcm9qZWN0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVBvcHVwMik7XG5cbmNvbnN0IHByb2plY3RzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFN1Ym1pdCcpO1xuXG5cbi8vIEFkZCB0b2RvIHRvICdnZW5lcmFsJyBhcnJheSB3aGVuIGNsaWNrZWRcbmZvcm1idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgYXJlIGFkZGVkIChqdXN0IHRvIHRlc3QpXG4gICAgbnVtYmVyKys7XG4gICAgYWRkVG9Ebyhwcm9qZWN0QXJyYXlbMF0udG9kb3MpO1xuXG4gICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbMF0udG9kb3MpO1xuICAgIGhpZGVQb3B1cCgpO1xuXG4gICAgY29uc3QgdGhpc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgdGhpc0Zvcm0ucmVzZXQoKTtcbn0pOyBcblxucHJvamVjdHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdEFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbMV0pO1xuXG4gICAgaGlkZVBvcHVwMigpO1xuXG4gICAgY29uc3QgdGhpc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rmb3JtXCIpO1xuICAgIHRoaXNGb3JtLnJlc2V0KCk7XG5cbiAgICAvL3JlcG9wdWxhdGUgc2lkZWJhciB3IG5ldyBwcm9qZWN0IHRpdGxlXG5cbiAgICBwb3B1bGF0ZVNpZGViYXIocHJvamVjdEFycmF5KTtcblxuXG59KTtcblxucG9wdWxhdGVTaWRlYmFyKHByb2plY3RBcnJheSk7XG5cbi8qIC8vIEV4YW1wbGUgY29kZSBmb3IgaG93IHRvIGxvYWQgcGFnZVxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZGlzcGxheVRvZG9zKDApO1xufSk7XG4qL1xuXG4vLyBQcmFjdGljZSFcblxuLypsZXQgcHJhY3RpY2VBcnJheSA9IFtdO1xuXG5sZXQgcHJhY3RpY2VHZW5lcmFsID0ge3RpdGxlOiAnZ2VuZXJhbCcsIHRvZG9zOiBbXSwgfTtcblxucHJhY3RpY2VBcnJheS5wdXNoKHByYWN0aWNlR2VuZXJhbCk7XG5cbnByYWN0aWNlQXJyYXlbMF0udG9kb3MucHVzaCh7dGl0bGU6ICdzdHVkeScsIGRhdGU6ICd0b21vcnJvdyd9KTtcblxuXG5jb25zb2xlLmxvZyhwcmFjdGljZUFycmF5WzBdLnRvZG9zWzBdLnRpdGxlKTsqL1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=