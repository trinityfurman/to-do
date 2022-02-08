

const displayTodos = (project) => {

    const body = document.querySelector('#main');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
    console.log('working okay');
     project.todos.forEach(todo => {

        const div = document.createElement('div');
        div.textContent = todo.title;

        body.appendChild(div);
     });
};

export { displayTodos };