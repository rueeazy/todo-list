import { listCard } from './menuProjectCard';
const taskContainer = document.querySelector('#tasks-container');
const existingCards = document.getElementsByClassName('project-card');

const projectCard = (() => {
    const createCard = () => {
        let projectCount;
        if(existingCards.length < 1) {
            projectCount = 0; 
        }   else {
            projectCount = existingCards.length;
        }
        createCardContainer(projectCount);
        createDirectoryNode(projectCount);  
    }

    const createCardContainer = (projectCount) => {
        let card = document.createElement('div');
        card.classList.add('project-card');
        card.dataset.card = `${projectCount}`;
        card.dataset.projectItem = `${projectCount}`;
        taskContainer.appendChild(card);
        createCardHeader(card);
        createListContainer(card);
    }

    const createCardHeader = (card) => {
        let header = document.createElement('div');
        header.id = 'cardHeader';
        header.classList.add('cardHeader');
        card.appendChild(header);
        cardHeaderContents(header)
    } 

    const cardHeaderContents = (header) => {
        let title = document.createElement('h3');
        let div = document.createElement('div');
        div.classList.add('icons');
        let button = document.createElement('i');
        let button2 = document.createElement('i');
        button.classList.add('far', 'fa-trash-alt', 'fa-2x', 'trashIcon');
        button2.classList.add('fa', 'fa-plus-circle', 'fa-2x', 'cardAddIcon');
        div.appendChild(button);
        div.appendChild(button2);
        header.appendChild(title);
        header.appendChild(div);
    }

    const createListContainer = (card) => {
        let ul = document.createElement('ul');
        ul.id = 'cardItems';
        ul.classList.add('cardItems');
        card.appendChild(ul);
    }

    const createDirectoryNode = (projectCount) => {
        let currentProjects = document.querySelector('#projects');
        let li = document.createElement('li');
        li.classList.add('projectItem');
        li.dataset.projectItem = `${projectCount}`;
        currentProjects.appendChild(li);
        addListNodeContents(li);
        listCard.globalListener();  
    }

    const addListNodeContents = (li) => {
        let para1 = document.createElement("p");
        para1.classList.add('projectName');
        let para2 = document.createElement("p");
        para2.dataset.count=""
        para2.classList.add('projectCount');
        li.appendChild(para1);
        li.appendChild(para2);
    }

    return { createCard }
})(); 

export { projectCard, existingCards, }