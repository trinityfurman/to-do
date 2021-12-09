const populateSidebar = () => {
    const sidebar = document.querySelector('#sidebar');
    const header = document.createElement('div');
    header.textContent = 'General';
    header.classList.add('projectHeaders');
    sidebar.appendChild(header);

};

export { populateSidebar };