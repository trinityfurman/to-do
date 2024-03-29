import { todoFactory } from './todoFactory.js';
import { displayPopup } from './displayForm.js';
import { addToDo } from './addToDo.js';
import { populateSidebar } from './populateSidebar.js';
import { displayTodos } from './displayTodos.js';
import { hidePopup } from './hideForm.js';
import { displayPopup2 } from './displayForm2.js';
import { addProject } from './addProject.js';
import { hidePopup2 } from './hideForm2.js';
import { projectFactory } from './projectFactory.js';


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
const general = projectFactory('General', []);

// Add general project to project array
projectArray.push(general);



// Display popup when add button is clicked
const addbutton = document.querySelector('#addbutton');
addbutton.addEventListener("click", displayPopup);

const formbutton = document.querySelector('#formSubmit');

// Display popup when project button is clicked
const projectbutton = document.querySelector('#projectbutton');
projectbutton.addEventListener('click', displayPopup2);

const projectsubmit = document.querySelector('#projectSubmit');


// Add new todo to 'general' array when clicked
formbutton.addEventListener('click', function(event) {

    event.preventDefault();

    addToDo(projectArray);

    hidePopup();

    const thisForm = document.getElementById("form");
    thisForm.reset();
}); 

// Add new project when clicked
projectsubmit.addEventListener('click', function(event) {
    event.preventDefault();

    addProject(projectArray);

    hidePopup2();

    const thisForm = document.getElementById("projectform");
    thisForm.reset();

    //Repopulate sidebar with new project title
    populateSidebar(projectArray);
});

populateSidebar(projectArray);

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







