import { projectCard, existingCards } from './createProjectCardDOM';
import { createTask } from './createTask';
import { deleteProject } from './deleteProjectCard';

const addProjectButton = document.querySelector('#addProjectButton');
const listForm = document.querySelector('#createListForm');

const createList = (() => {
    addProjectButton.addEventListener('click', handleClick);
    function handleClick(e) {
        listForm.classList.add('show');
        addButtonListener();
    }

    const addButtonListener = () => {
        let addListButton = document.querySelector('#addList').addEventListener('click', getInput);
    }

    const getInput = (e) => {
        e.preventDefault();
        let listTitle = document.getElementById('listTitle').value;
        addNewList(listTitle);
        addToDirectory(listTitle);
    }

    const addToDirectory = (listTitle) => {
        let project = document.querySelector('#projects').lastChild;
        project.firstChild.innerText = `${listTitle}`; 
        project.lastChild.innerText = "0"; 
    }

    const addNewList = (listTitle) => {
        projectCard.createCard();
        let newCard = existingCards[existingCards.length - 1];
        let projectTitle = newCard.querySelector("h3");
        projectTitle.innerText = `${listTitle}`;
        createTask.addTaskBtnListener();
        deleteProject.globalListener();
        hideForm();
        if(document.querySelector('#menu-button').classList.contains('hide')) { document.querySelector('#menu-button').classList.remove('hide') }
    }

    const hideForm = () => {
        listForm.classList.remove('show');
        document.getElementById('listTitle').value = "";
    }

    return {
        addNewList
    }

})();

export { createList }
