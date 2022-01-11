import { todoFactory } from './todoFactory.js';
import { displayPopup } from './displayForm.js';
import { addToDo } from './addToDo.js';
import { populateSidebar } from './populateSidebar.js';
import { displayTodos } from './displayTodos.js';
import { hidePopup } from './hideForm.js';


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

addbutton.addEventListener("click", displayPopup);

const formbutton = document.querySelector('#formSubmit');



formbutton.addEventListener('click', function(event) {

    event.preventDefault();

    number++;
    addToDo(general);

    console.log(number);
    console.log(general[number]);
    hidePopup();

    const thisForm = document.getElementById("form");
    thisForm.reset();
}); 

populateSidebar(projects);

/* // Example code for how to load page
menuButton.addEventListener('click', () => {
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    displayTodos(0);
});
*/








