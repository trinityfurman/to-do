/* Add method to prevent default on form(event) */

import { todoFactory } from "./todoFactory";

const addToDo = (projects) => {

    if (document.getElementById('formtitle').value == "" || document.getElementById('formdate').value == "" || document.getElementById('formpriority').value == "") {
        alert("Please fill out every field.");
    } else {
        const newTodo = todoFactory(document.getElementById('formtitle').value, document.getElementById('formdate').value, document.getElementById('formpriority').value, document.getElementById('projectSelect').value, projects);
        const currentProject = projects.find(project => project.title == document.getElementById('projectSelect').value);
        currentProject.todos.push(newTodo);
    }
};

export { addToDo };