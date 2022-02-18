import { displayTodos } from "./displayTodos";

const todoFactory = (title, date, priority, project, projectlist) => {
    return { title, date, priority, project, projectlist,
        delete() {
            const thisProject = projectlist.find(entry => entry.title == project);
            //const thisProject = projectlist.find(function(project) {
                //return project.title == title;
            //});
            //console.log(thisProject);
            thisProject.todos.splice(thisProject.todos.findIndex(todo => todo == this), 1);
            displayTodos(thisProject);
            console.log(thisProject.todos);

        }
    };
};

export { todoFactory };

//How is todo created? Added to todo array in specific project

// do i need to include projectArray in creating it?