import { todoFactory } from './todoFactory.js';
import { displayPopup } from './displayForm.js';
import { addToDo } from './addToDo.js';

//const newtodo = todoFactory('wash dogs', 'tomorrow', 'big priority');

//console.log(newtodo.title);
//console.log(newtodo.date);

const projects = [];

const general = [];

projects.push(general);



const addbutton = document.querySelector('#addbutton');

addbutton.addEventListener("click", displayPopup);

const formbutton = document.querySelector('#formSubmit');


formbutton.addEventListener('click', event => {
    event.preventDefault;
    addToDo(general);
    console.log(general);
});





