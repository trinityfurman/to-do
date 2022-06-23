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

    const header = document.createElement('div');
    header.textContent = project.title;
    header.classList.add('mainHeader');
    body.appendChild(header);
   
     project.todos.forEach(todo => {

        const div = document.createElement('div');

        div.textContent = todo.title;
        div.classList.add('todoItems');
        const deletebutton = document.createElement('div');
        deletebutton.textContent = 'x';
        deletebutton.addEventListener('click', function() {
          todo.delete();
        });
        div.appendChild(deletebutton);

        // Create collapsible item
        const collapse = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.textContent = `Complete by: ${todo.date}`;
        div2.textContent = 'Notes: ';
        collapse.appendChild(div1);
        collapse.appendChild(div2);

        collapse.classList.add('collapseItems');

        // Add event listener when todo is clicked on; change collapsible status to block
        div.addEventListener('click', function() {
          if (collapse.style.display == 'block') {
            collapse.style.display = 'none';
          } else {
            collapse.style.display = 'block';
          }
        });


        body.appendChild(div);
        body.appendChild(collapse);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBOztBQUVBLElBQUksb0VBQWU7OztBQUduQixDQUFDOztBQUVELG9FQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUI7O0FBRXZCOztBQUVBLDZCQUE2QixpQ0FBaUM7OztBQUc5RCw2Q0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2FkZFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlU2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlGb3JtMi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGlkZUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaGlkZUZvcm0yLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3BvcHVsYXRlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vcHJvamVjdEZhY3RvcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdCB9IGZyb20gXCIuL2NyZWF0ZVNlbGVjdFwiO1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0dGl0bGUnKS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGZpbGwgb3V0IGV2ZXJ5IGZpZWxkLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3R0aXRsZScpLnZhbHVlLCBbXSk7XG4gICAgICAgIGNhdGVnb3J5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIGNyZWF0ZVNlbGVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHRpdGxlJykudmFsdWUpO1xuICAgIH1cbn07XG5cblxuXG5leHBvcnQgeyBhZGRQcm9qZWN0IH07IiwiLyogQWRkIG1ldGhvZCB0byBwcmV2ZW50IGRlZmF1bHQgb24gZm9ybShldmVudCkgKi9cblxuaW1wb3J0IHsgdG9kb0ZhY3RvcnkgfSBmcm9tIFwiLi90b2RvRmFjdG9yeVwiO1xuXG5jb25zdCBhZGRUb0RvID0gKHByb2plY3RzKSA9PiB7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm10aXRsZScpLnZhbHVlID09IFwiXCIgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1kYXRlJykudmFsdWUgPT0gXCJcIiB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybXByaW9yaXR5JykudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsIG91dCBldmVyeSBmaWVsZC5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG9GYWN0b3J5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdGl0bGUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1kYXRlJykudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtcHJpb3JpdHknKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RTZWxlY3QnKS52YWx1ZSwgcHJvamVjdHMpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0U2VsZWN0JykudmFsdWUpO1xuICAgICAgICBjdXJyZW50UHJvamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGFkZFRvRG8gfTsiLCJjb25zdCBjcmVhdGVTZWxlY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RcIik7XG4gICAgLyp3aGlsZSAoc2VsZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHNlbGVjdC5hZGQob3B0aW9uKTtcbiAgICB9KSA7Ki9cbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnRleHQgPSB0aXRsZTtcbiAgICBvcHRpb24udmFsdWUgPSB0aXRsZTtcbiAgICBzZWxlY3QuYWRkKG9wdGlvbik7XG5cbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVNlbGVjdCB9OyIsImNvbnN0IGRpc3BsYXlQb3B1cCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQb3B1cCB9OyIsImNvbnN0IGRpc3BsYXlQb3B1cDIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxUd28nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGNvbnNvbGUubG9nKCdkaXNwbGF5IHdvcmtpbmcnKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQb3B1cDIgfTsiLCJcblxuY29uc3QgZGlzcGxheVRvZG9zID0gKHByb2plY3QpID0+IHtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdtYWluSGVhZGVyJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgXG4gICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW1zJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVidXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgIGRlbGV0ZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRvZG8uZGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlYnV0dG9uKTtcblxuICAgICAgICAvLyBDcmVhdGUgY29sbGFwc2libGUgaXRlbVxuICAgICAgICBjb25zdCBjb2xsYXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MS50ZXh0Q29udGVudCA9IGBDb21wbGV0ZSBieTogJHt0b2RvLmRhdGV9YDtcbiAgICAgICAgZGl2Mi50ZXh0Q29udGVudCA9ICdOb3RlczogJztcbiAgICAgICAgY29sbGFwc2UuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgICAgIGNvbGxhcHNlLmFwcGVuZENoaWxkKGRpdjIpO1xuXG4gICAgICAgIGNvbGxhcHNlLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlSXRlbXMnKTtcblxuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgd2hlbiB0b2RvIGlzIGNsaWNrZWQgb247IGNoYW5nZSBjb2xsYXBzaWJsZSBzdGF0dXMgdG8gYmxvY2tcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGNvbGxhcHNlLnN0eWxlLmRpc3BsYXkgPT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGFwc2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb2xsYXBzZSk7XG4gICAgIH0pO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVRvZG9zIH07IiwiY29uc3QgaGlkZVBvcHVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmV4cG9ydCB7IGhpZGVQb3B1cCB9OyIsImNvbnN0IGhpZGVQb3B1cDIgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rmb3JtJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFR3bycpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5cbmV4cG9ydCB7IGhpZGVQb3B1cDIgfTsiLCJpbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb3NcIjtcblxuXG5jb25zdCBwb3B1bGF0ZVNpZGViYXIgPSAocHJvamVjdEFycmF5KSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyQm9keScpO1xuXG4gICAgd2hpbGUgKHNpZGViYXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBzaWRlYmFyLnJlbW92ZUNoaWxkKHNpZGViYXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gQ3ljbGUgdGhyb3VnaCBhcnJheSBvZiBwcm9qZWN0IE9CSkVDVFNcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVycycpO1xuICAgICAgICAvL2hlYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KSk7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkaXNwbGF5VG9kb3MocHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd29ya2luZycpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgfSk7XG5cbiAgICAvKmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdHZW5lcmFsJztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcnMnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgMCk7XG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZGlzcGxheVRvZG9zKHByb2plY3RBcnJheSwgMClcbiAgICB9KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhlYWRlcik7Ki9cblxufTtcblxuZXhwb3J0IHsgcG9wdWxhdGVTaWRlYmFyIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9ICh0aXRsZSwgdG9kb3MpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgdG9kb3MgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RGYWN0b3J5IH07IiwiaW1wb3J0IHsgZGlzcGxheVRvZG9zIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9zXCI7XG5cbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgcHJvamVjdGxpc3QpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIHByb2plY3RsaXN0LFxuICAgICAgICBkZWxldGUoKSB7XG4gICAgICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IHByb2plY3RsaXN0LmZpbmQoZW50cnkgPT4gZW50cnkudGl0bGUgPT0gcHJvamVjdCk7XG4gICAgICAgICAgICAvL2NvbnN0IHRoaXNQcm9qZWN0ID0gcHJvamVjdGxpc3QuZmluZChmdW5jdGlvbihwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gcHJvamVjdC50aXRsZSA9PSB0aXRsZTtcbiAgICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXNQcm9qZWN0KTtcbiAgICAgICAgICAgIHRoaXNQcm9qZWN0LnRvZG9zLnNwbGljZSh0aGlzUHJvamVjdC50b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvID09IHRoaXMpLCAxKTtcbiAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyh0aGlzUHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzUHJvamVjdC50b2Rvcyk7XG5cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5leHBvcnQgeyB0b2RvRmFjdG9yeSB9O1xuXG4vL0hvdyBpcyB0b2RvIGNyZWF0ZWQ/IEFkZGVkIHRvIHRvZG8gYXJyYXkgaW4gc3BlY2lmaWMgcHJvamVjdFxuXG4vLyBkbyBpIG5lZWQgdG8gaW5jbHVkZSBwcm9qZWN0QXJyYXkgaW4gY3JlYXRpbmcgaXQ/IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvRmFjdG9yeSB9IGZyb20gJy4vdG9kb0ZhY3RvcnkuanMnO1xuaW1wb3J0IHsgZGlzcGxheVBvcHVwIH0gZnJvbSAnLi9kaXNwbGF5Rm9ybS5qcyc7XG5pbXBvcnQgeyBhZGRUb0RvIH0gZnJvbSAnLi9hZGRUb0RvLmpzJztcbmltcG9ydCB7IHBvcHVsYXRlU2lkZWJhciB9IGZyb20gJy4vcG9wdWxhdGVTaWRlYmFyLmpzJztcbmltcG9ydCB7IGRpc3BsYXlUb2RvcyB9IGZyb20gJy4vZGlzcGxheVRvZG9zLmpzJztcbmltcG9ydCB7IGhpZGVQb3B1cCB9IGZyb20gJy4vaGlkZUZvcm0uanMnO1xuaW1wb3J0IHsgZGlzcGxheVBvcHVwMiB9IGZyb20gJy4vZGlzcGxheUZvcm0yLmpzJztcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2FkZFByb2plY3QuanMnO1xuaW1wb3J0IHsgaGlkZVBvcHVwMiB9IGZyb20gJy4vaGlkZUZvcm0yLmpzJztcbmltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSAnLi9wcm9qZWN0RmFjdG9yeS5qcyc7XG5cblxuLy9UT0RPOiAxLiBBZGQgYWJpbGl0eSB0byBhZGQgbmV3IHByb2plY3RzOyAyLiBIYXZlIHByb2plY3RzIHBvcHVsYXRlIGluIGxpc3Qgd2hlbiBhZGRpbmcgdG9kb1xuXG4vL2NvbnN0IG5ld3RvZG8gPSB0b2RvRmFjdG9yeSgnd2FzaCBkb2dzJywgJ3RvbW9ycm93JywgJ2JpZyBwcmlvcml0eScpO1xuXG4vL2NvbnNvbGUubG9nKG5ld3RvZG8udGl0bGUpO1xuLy9jb25zb2xlLmxvZyhuZXd0b2RvLmRhdGUpO1xuXG5cblxuXG4vLyBDcmVhdGUgYXJyYXkgb2YgcHJvamVjdHNcbmxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuLy8gQ3JlYXRlIGFycmF5IGZvciAnZ2VuZXJhbCcgcHJvamVjdFxuLy9sZXQgZ2VuZXJhbCA9IFtdO1xuXG4vLyBBZGQgJ2dlbmVyYWwnIGFycmF5IHRvIHByb2plY3RzIGFycmF5XG4vL3Byb2plY3RBcnJheS5wdXNoKGdlbmVyYWwpO1xuXG4vLyBDcmVhdGUgYXJyYXkgb2YgcHJvamVjdCB0aXRsZXNcbi8vbGV0IHByb2plY3RUaXRsZXMgPSBbXTtcblxuLy8gQ3JlYXRlIGZpcnN0IHByb2plY3Qgb2JqZWN0OiAnZ2VuZXJhbCdcbmNvbnN0IGdlbmVyYWwgPSBwcm9qZWN0RmFjdG9yeSgnR2VuZXJhbCcsIFtdKTtcblxucHJvamVjdEFycmF5LnB1c2goZ2VuZXJhbCk7XG5cblxuXG5cblxubGV0IG51bWJlciA9IC0xO1xuXG5cbmNvbnN0IGFkZGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRidXR0b24nKTtcblxuYWRkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UG9wdXApO1xuXG5jb25zdCBmb3JtYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1TdWJtaXQnKTtcblxuY29uc3QgcHJvamVjdGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0YnV0dG9uJyk7XG5cbnByb2plY3RidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UG9wdXAyKTtcblxuY29uc3QgcHJvamVjdHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0U3VibWl0Jyk7XG5cblxuLy8gQWRkIHRvZG8gdG8gJ2dlbmVyYWwnIGFycmF5IHdoZW4gY2xpY2tlZFxuZm9ybWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gS2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyBhcmUgYWRkZWQgKGp1c3QgdG8gdGVzdClcbiAgICBudW1iZXIrKztcbiAgICAvL2FkZFRvRG8ocHJvamVjdEFycmF5WzBdLnRvZG9zKTtcblxuICAgIGFkZFRvRG8ocHJvamVjdEFycmF5KTtcblxuICAgIGNvbnNvbGUubG9nKG51bWJlcik7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5WzBdLnRvZG9zKTtcbiAgICBoaWRlUG9wdXAoKTtcblxuICAgIGNvbnN0IHRoaXNGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuICAgIHRoaXNGb3JtLnJlc2V0KCk7XG59KTsgXG5cbnByb2plY3RzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhZGRQcm9qZWN0KHByb2plY3RBcnJheSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5WzFdKTtcblxuICAgIGhpZGVQb3B1cDIoKTtcblxuICAgIGNvbnN0IHRoaXNGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Zm9ybVwiKTtcbiAgICB0aGlzRm9ybS5yZXNldCgpO1xuXG4gICAgLy9yZXBvcHVsYXRlIHNpZGViYXIgdyBuZXcgcHJvamVjdCB0aXRsZVxuXG4gICAgcG9wdWxhdGVTaWRlYmFyKHByb2plY3RBcnJheSk7XG5cblxufSk7XG5cbnBvcHVsYXRlU2lkZWJhcihwcm9qZWN0QXJyYXkpO1xuXG4vKiAvLyBFeGFtcGxlIGNvZGUgZm9yIGhvdyB0byBsb2FkIHBhZ2Vcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGRpc3BsYXlUb2RvcygwKTtcbn0pO1xuKi9cblxuLy8gUHJhY3RpY2UhXG5cbi8qbGV0IHByYWN0aWNlQXJyYXkgPSBbXTtcblxubGV0IHByYWN0aWNlR2VuZXJhbCA9IHt0aXRsZTogJ2dlbmVyYWwnLCB0b2RvczogW10sIH07XG5cbnByYWN0aWNlQXJyYXkucHVzaChwcmFjdGljZUdlbmVyYWwpO1xuXG5wcmFjdGljZUFycmF5WzBdLnRvZG9zLnB1c2goe3RpdGxlOiAnc3R1ZHknLCBkYXRlOiAndG9tb3Jyb3cnfSk7XG5cblxuY29uc29sZS5sb2cocHJhY3RpY2VBcnJheVswXS50b2Rvc1swXS50aXRsZSk7Ki9cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9