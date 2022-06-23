

const displayTodos = (project) => {

    const body = document.querySelector('#main');
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    const header = document.createElement('div');
    header.textContent = project.title;
    header.classList.add('mainHeader');
    body.appendChild(header);
   
     project.todos.forEach(todo => {

        const div = document.createElement('div');

        div.textContent = todo.title;
        div.classList.add('todoItems');
        const deletebutton = document.createElement('div');
        deletebutton.textContent = 'x';
        deletebutton.addEventListener('click', function() {
          todo.delete();
        });
        div.appendChild(deletebutton);

        // Create collapsible item
        const collapse = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        div1.textContent = `Complete by: ${todo.date}`;
        div2.textContent = 'Notes: ';
        collapse.appendChild(div1);
        collapse.appendChild(div2);

        collapse.classList.add('collapseItems');

        // Add event listener when todo is clicked on; change collapsible status to block
        div.addEventListener('click', function() {
          if (collapse.style.display == 'block') {
            collapse.style.display = 'none';
          } else {
            collapse.style.display = 'block';
          }
        });


        body.appendChild(div);
        body.appendChild(collapse);
     });
};

export { displayTodos };