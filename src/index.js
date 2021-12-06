import { todoFactory } from './todoFactory.js';
import { displayPopup } from './displayForm.js';

const newtodo = todoFactory('wash dogs', 'tomorrow', 'big priority');

console.log(newtodo.title);
console.log(newtodo.date);

const addbutton = document.querySelector('#addbutton');

addbutton.addEventListener("click", displayPopup);