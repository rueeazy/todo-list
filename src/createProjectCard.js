import { projectCard, existingCards } from './createProjectCardDOM';
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
    }

    const addNewList = (listTitle) => {
        projectCard.createCard();
        let newCard = existingCards[existingCards.length - 1];
        let projectTitle = newCard.querySelector("h3");
        projectTitle.innerText = `${listTitle}`;
        hideForm();
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
