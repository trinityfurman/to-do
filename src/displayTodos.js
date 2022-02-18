

const displayTodos = (project) => {

    const body = document.querySelector('#main');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }
   
     project.todos.forEach(todo => {

        const div = document.createElement('div');
        div.textContent = todo.title;
        const deletebutton = document.createElement('div');
        deletebutton.textContent = 'x';
        deletebutton.addEventListener('click', function() {
          todo.delete();
        });
        div.appendChild(deletebutton);


        body.appendChild(div);
     });
};

export { displayTodos };