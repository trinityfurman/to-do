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
/* harmony import */ var _createSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSelect */ "./src/createSelect.js");



const addProject = (category) => {
    if (document.getElementById('projecttitle').value == "") {
        alert("Please fill out every field.");
    } else {
        const newProject = (0,_projectFactory__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(document.getElementById('projecttitle').value, []);
        category.push(newProject);
        (0,_createSelect__WEBPACK_IMPORTED_MODULE_1__.createSelect)(document.getElementById('projecttitle').value);
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



const addToDo = (projects) => {

    if (document.getElementById('formtitle').value == "" || document.getElementById('formdate').value == "" || document.getElementById('formpriority').value == "") {
        alert("Please fill out every field.");
    } else {
        const newTodo = (0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(document.getElementById('formtitle').value, document.getElementById('formdate').value, document.getElementById('formpriority').value, document.getElementById('projectSelect').value, projects);
        const currentProject = projects.find(project => project.title == document.getElementById('projectSelect').value);
        currentProject.todos.push(newTodo);
    }
};



/***/ }),

/***/ "./src/createSelect.js":
/*!*****************************!*\
  !*** ./src/createSelect.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelect": () => (/* binding */ createSelect)
/* harmony export */ });
const createSelect = (title) => {
    const select = document.getElementById("projectSelect");
    /*while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    projects.forEach(project => {
        let option = document.createElement('option');
        option.text = project.title;
        select.add(option);
    }) ;*/
    let option = document.createElement('option');
    option.text = title;
    option.value = title;
    select.add(option);

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
   
     project.todos.forEach(todo => {

        const div = document.createElement('div');
        div.textContent = todo.title;
        const deletebutton = document.createElement('div');
        deletebutton.textContent = 'x';
        deletebutton.addEventListener('click', function() {
          todo.delete();
        });
        div.appendChild(deletebutton);


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
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");


const todoFactory = (title, date, priority, project, projectlist) => {
    return { title, date, priority, project, projectlist,
        delete() {
            const thisProject = projectlist.find(entry => entry.title == project);
            //const thisProject = projectlist.find(function(project) {
                //return project.title == title;
            //});
            //console.log(thisProject);
            thisProject.todos.splice(thisProject.todos.findIndex(todo => todo == this), 1);
            (0,_displayTodos__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(thisProject);
            console.log(thisProject.todos);

        }
    };
};



//How is todo created? Added to todo array in specific project

// do i need to include projectArray in creating it?

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
const general = (0,_projectFactory_js__WEBPACK_IMPORTED_MODULE_9__.projectFactory)('General', []);

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
    //addToDo(projectArray[0].todos);

    (0,_addToDo_js__WEBPACK_IMPORTED_MODULE_2__.addToDo)(projectArray);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzlELDZDQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvYWRkVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheUZvcm0yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlUb2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oaWRlRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oaWRlRm9ybTIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcG9wdWxhdGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RGYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9wcm9qZWN0RmFjdG9yeVwiO1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0IH0gZnJvbSBcIi4vY3JlYXRlU2VsZWN0XCI7XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3R0aXRsZScpLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCBvdXQgZXZlcnkgZmllbGQuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHRpdGxlJykudmFsdWUsIFtdKTtcbiAgICAgICAgY2F0ZWdvcnkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgY3JlYXRlU2VsZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGUnKS52YWx1ZSk7XG4gICAgfVxufTtcblxuXG5cbmV4cG9ydCB7IGFkZFByb2plY3QgfTsiLCIvKiBBZGQgbWV0aG9kIHRvIHByZXZlbnQgZGVmYXVsdCBvbiBmb3JtKGV2ZW50KSAqL1xuXG5pbXBvcnQgeyB0b2RvRmFjdG9yeSB9IGZyb20gXCIuL3RvZG9GYWN0b3J5XCI7XG5cbmNvbnN0IGFkZFRvRG8gPSAocHJvamVjdHMpID0+IHtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXRpdGxlJykudmFsdWUgPT0gXCJcIiB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybWRhdGUnKS52YWx1ZSA9PSBcIlwiIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcHJpb3JpdHknKS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IGV2ZXJ5IGZpZWxkLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kb0ZhY3RvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm10aXRsZScpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybWRhdGUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1wcmlvcml0eScpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFNlbGVjdCcpLnZhbHVlLCBwcm9qZWN0cyk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTZWxlY3QnKS52YWx1ZSk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgfVxufTtcblxuZXhwb3J0IHsgYWRkVG9EbyB9OyIsImNvbnN0IGNyZWF0ZVNlbGVjdCA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFNlbGVjdFwiKTtcbiAgICAvKndoaWxlIChzZWxlY3QuZmlyc3RDaGlsZCkge1xuICAgICAgICBzZWxlY3QucmVtb3ZlQ2hpbGQoc2VsZWN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgc2VsZWN0LmFkZChvcHRpb24pO1xuICAgIH0pIDsqL1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dCA9IHRpdGxlO1xuICAgIG9wdGlvbi52YWx1ZSA9IHRpdGxlO1xuICAgIHNlbGVjdC5hZGQob3B0aW9uKTtcblxufTtcblxuZXhwb3J0IHsgY3JlYXRlU2VsZWN0IH07IiwiY29uc3QgZGlzcGxheVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVBvcHVwIH07IiwiY29uc3QgZGlzcGxheVBvcHVwMiA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdGZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFR3bycpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgY29uc29sZS5sb2coJ2Rpc3BsYXkgd29ya2luZycpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVBvcHVwMiB9OyIsIlxuXG5jb25zdCBkaXNwbGF5VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgIFxuICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVidXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgIGRlbGV0ZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRvZG8uZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcblxuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgfSk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5VG9kb3MgfTsiLCJjb25zdCBoaWRlUG9wdXAgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuZXhwb3J0IHsgaGlkZVBvcHVwIH07IiwiY29uc3QgaGlkZVBvcHVwMiA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdGZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsVHdvJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuZXhwb3J0IHsgaGlkZVBvcHVwMiB9OyIsImltcG9ydCB7IGRpc3BsYXlUb2RvcyB9IGZyb20gXCIuL2Rpc3BsYXlUb2Rvc1wiO1xuXG5cbmNvbnN0IHBvcHVsYXRlU2lkZWJhciA9IChwcm9qZWN0QXJyYXkpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXJCb2R5Jyk7XG5cbiAgICB3aGlsZSAoc2lkZWJhci5maXJzdENoaWxkKSB7XG4gICAgICAgIHNpZGViYXIucmVtb3ZlQ2hpbGQoc2lkZWJhci5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICAvLyBDeWNsZSB0aHJvdWdoIGFycmF5IG9mIHByb2plY3QgT0JKRUNUU1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIZWFkZXJzJyk7XG4gICAgICAgIC8vaGVhZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIHByb2plY3RBcnJheS5pbmRleE9mKHByb2plY3QpKTtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3JraW5nJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICB9KTtcblxuICAgIC8qY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0dlbmVyYWwnO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVycycpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCAwKTtcbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkaXNwbGF5VG9kb3MocHJvamVjdEFycmF5LCAwKVxuICAgIH0pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTsqL1xuXG59O1xuXG5leHBvcnQgeyBwb3B1bGF0ZVNpZGViYXIgfTtcbiIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCB0b2RvcykgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCB0b2RvcyB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTsiLCJpbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb3NcIjtcblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBwcm9qZWN0bGlzdCkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgcHJvamVjdGxpc3QsXG4gICAgICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNQcm9qZWN0ID0gcHJvamVjdGxpc3QuZmluZChlbnRyeSA9PiBlbnRyeS50aXRsZSA9PSBwcm9qZWN0KTtcbiAgICAgICAgICAgIC8vY29uc3QgdGhpc1Byb2plY3QgPSBwcm9qZWN0bGlzdC5maW5kKGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICAvL3JldHVybiBwcm9qZWN0LnRpdGxlID09IHRpdGxlO1xuICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpc1Byb2plY3QpO1xuICAgICAgICAgICAgdGhpc1Byb2plY3QudG9kb3Muc3BsaWNlKHRoaXNQcm9qZWN0LnRvZG9zLmZpbmRJbmRleCh0b2RvID0+IHRvZG8gPT0gdGhpcyksIDEpO1xuICAgICAgICAgICAgZGlzcGxheVRvZG9zKHRoaXNQcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNQcm9qZWN0LnRvZG9zKTtcblxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IHRvZG9GYWN0b3J5IH07XG5cbi8vSG93IGlzIHRvZG8gY3JlYXRlZD8gQWRkZWQgdG8gdG9kbyBhcnJheSBpbiBzcGVjaWZpYyBwcm9qZWN0XG5cbi8vIGRvIGkgbmVlZCB0byBpbmNsdWRlIHByb2plY3RBcnJheSBpbiBjcmVhdGluZyBpdD8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG9GYWN0b3J5IH0gZnJvbSAnLi90b2RvRmFjdG9yeS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5UG9wdXAgfSBmcm9tICcuL2Rpc3BsYXlGb3JtLmpzJztcbmltcG9ydCB7IGFkZFRvRG8gfSBmcm9tICcuL2FkZFRvRG8uanMnO1xuaW1wb3J0IHsgcG9wdWxhdGVTaWRlYmFyIH0gZnJvbSAnLi9wb3B1bGF0ZVNpZGViYXIuanMnO1xuaW1wb3J0IHsgZGlzcGxheVRvZG9zIH0gZnJvbSAnLi9kaXNwbGF5VG9kb3MuanMnO1xuaW1wb3J0IHsgaGlkZVBvcHVwIH0gZnJvbSAnLi9oaWRlRm9ybS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5UG9wdXAyIH0gZnJvbSAnLi9kaXNwbGF5Rm9ybTIuanMnO1xuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAyIH0gZnJvbSAnLi9oaWRlRm9ybTIuanMnO1xuaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tICcuL3Byb2plY3RGYWN0b3J5LmpzJztcblxuXG4vL1RPRE86IDEuIEFkZCBhYmlsaXR5IHRvIGFkZCBuZXcgcHJvamVjdHM7IDIuIEhhdmUgcHJvamVjdHMgcG9wdWxhdGUgaW4gbGlzdCB3aGVuIGFkZGluZyB0b2RvXG5cbi8vY29uc3QgbmV3dG9kbyA9IHRvZG9GYWN0b3J5KCd3YXNoIGRvZ3MnLCAndG9tb3Jyb3cnLCAnYmlnIHByaW9yaXR5Jyk7XG5cbi8vY29uc29sZS5sb2cobmV3dG9kby50aXRsZSk7XG4vL2NvbnNvbGUubG9nKG5ld3RvZG8uZGF0ZSk7XG5cblxuXG5cbi8vIENyZWF0ZSBhcnJheSBvZiBwcm9qZWN0c1xubGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4vLyBDcmVhdGUgYXJyYXkgZm9yICdnZW5lcmFsJyBwcm9qZWN0XG4vL2xldCBnZW5lcmFsID0gW107XG5cbi8vIEFkZCAnZ2VuZXJhbCcgYXJyYXkgdG8gcHJvamVjdHMgYXJyYXlcbi8vcHJvamVjdEFycmF5LnB1c2goZ2VuZXJhbCk7XG5cbi8vIENyZWF0ZSBhcnJheSBvZiBwcm9qZWN0IHRpdGxlc1xuLy9sZXQgcHJvamVjdFRpdGxlcyA9IFtdO1xuXG4vLyBDcmVhdGUgZmlyc3QgcHJvamVjdCBvYmplY3Q6ICdnZW5lcmFsJ1xuY29uc3QgZ2VuZXJhbCA9IHByb2plY3RGYWN0b3J5KCdHZW5lcmFsJywgW10pO1xuXG5wcm9qZWN0QXJyYXkucHVzaChnZW5lcmFsKTtcblxuXG5cblxuXG5sZXQgbnVtYmVyID0gLTE7XG5cblxuY29uc3QgYWRkYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZGJ1dHRvbicpO1xuXG5hZGRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlQb3B1cCk7XG5cbmNvbnN0IGZvcm1idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybVN1Ym1pdCcpO1xuXG5jb25zdCBwcm9qZWN0YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RidXR0b24nKTtcblxucHJvamVjdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQb3B1cDIpO1xuXG5jb25zdCBwcm9qZWN0c3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RTdWJtaXQnKTtcblxuXG4vLyBBZGQgdG9kbyB0byAnZ2VuZXJhbCcgYXJyYXkgd2hlbiBjbGlja2VkXG5mb3JtYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBLZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIGFyZSBhZGRlZCAoanVzdCB0byB0ZXN0KVxuICAgIG51bWJlcisrO1xuICAgIC8vYWRkVG9Ebyhwcm9qZWN0QXJyYXlbMF0udG9kb3MpO1xuXG4gICAgYWRkVG9Ebyhwcm9qZWN0QXJyYXkpO1xuXG4gICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbMF0udG9kb3MpO1xuICAgIGhpZGVQb3B1cCgpO1xuXG4gICAgY29uc3QgdGhpc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gICAgdGhpc0Zvcm0ucmVzZXQoKTtcbn0pOyBcblxucHJvamVjdHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdEFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXlbMV0pO1xuXG4gICAgaGlkZVBvcHVwMigpO1xuXG4gICAgY29uc3QgdGhpc0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rmb3JtXCIpO1xuICAgIHRoaXNGb3JtLnJlc2V0KCk7XG5cbiAgICAvL3JlcG9wdWxhdGUgc2lkZWJhciB3IG5ldyBwcm9qZWN0IHRpdGxlXG5cbiAgICBwb3B1bGF0ZVNpZGViYXIocHJvamVjdEFycmF5KTtcblxuXG59KTtcblxucG9wdWxhdGVTaWRlYmFyKHByb2plY3RBcnJheSk7XG5cbi8qIC8vIEV4YW1wbGUgY29kZSBmb3IgaG93IHRvIGxvYWQgcGFnZVxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZGlzcGxheVRvZG9zKDApO1xufSk7XG4qL1xuXG4vLyBQcmFjdGljZSFcblxuLypsZXQgcHJhY3RpY2VBcnJheSA9IFtdO1xuXG5sZXQgcHJhY3RpY2VHZW5lcmFsID0ge3RpdGxlOiAnZ2VuZXJhbCcsIHRvZG9zOiBbXSwgfTtcblxucHJhY3RpY2VBcnJheS5wdXNoKHByYWN0aWNlR2VuZXJhbCk7XG5cbnByYWN0aWNlQXJyYXlbMF0udG9kb3MucHVzaCh7dGl0bGU6ICdzdHVkeScsIGRhdGU6ICd0b21vcnJvdyd9KTtcblxuXG5jb25zb2xlLmxvZyhwcmFjdGljZUFycmF5WzBdLnRvZG9zWzBdLnRpdGxlKTsqL1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=