

const displayTodos = (projectArray, projectIndex) => {
    const thisArray = projectArray[projectIndex];
    console.log('working');
    const body = document.querySelector('#main');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
     thisArray.forEach(todo => {

        const div = document.createElement('div');
        div.textContent = todo.title;

        body.appendChild(div);
     });
};

export { displayTodos };