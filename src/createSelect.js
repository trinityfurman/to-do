const createSelect = (title) => {
    const select = document.getElementById("projectSelect");
    /*while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    projects.forEach(project => {
        let option = document.createElement('option');
        option.text = project.title;
        select.add(option);
    }) ;*/
    let option = document.createElement('option');
    option.text = title;
    option.value = title;
    select.add(option);

};

export { createSelect };