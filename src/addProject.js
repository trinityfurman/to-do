import { projectFactory } from "./projectFactory";
import { createSelect } from "./createSelect";

const addProject = (category) => {
    if (document.getElementById('projecttitle').value == "") {
        alert("Please fill out every field.");
    } else {
        const newProject = projectFactory(document.getElementById('projecttitle').value, []);
        category.push(newProject);
        createSelect(document.getElementById('projecttitle').value);
    }
};



export { addProject };