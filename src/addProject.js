import { projectFactory } from "./projectFactory";

const addProject = (category) => {
    if (document.getElementById('projecttitle').value == "") {
        alert("Please fill out every field.");
    } else {
        const newProject = projectFactory(document.getElementById('projecttitle').value, []);
        category.push(newProject);
    }
};



export { addProject };