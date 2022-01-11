import { displayTodos } from "./displayTodos";


const populateSidebar = (projectArray) => {
    const sidebar = document.querySelector('#sidebar');
    const header = document.createElement('div');
    header.textContent = 'General';
    header.classList.add('projectHeaders');
    header.setAttribute('data-index', 0);
    header.addEventListener("click", function() {
        displayTodos(projectArray, 0)
    });
    sidebar.appendChild(header);

};

export { populateSidebar };
