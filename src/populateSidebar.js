import { displayTodos } from "./displayTodos";


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
            displayTodos(project);
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

export { populateSidebar };
