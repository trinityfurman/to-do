/* Add method to prevent default on form(event) */

import { todoFactory } from "./todoFactory";

const addToDo = (category) => {

    if (document.getElementById('formtitle').value == "" || document.getElementById('formdate').value == "" || document.getElementById('formpriority').value == "") {
        alert("Please fill out every field.");
    } else {
        const newTodo = todoFactory(document.getElementById('formtitle').value, document.getElementById('formdate').value, document.getElementById('formpriority').value);
        category.push(newTodo);
    }
};

export { addToDo };