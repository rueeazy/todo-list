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
        let button = document.createElement('i');
        button.classList.add('fa', 'fa-plus-circle', 'fa-2x', 'cardAddIcon');
        header.appendChild(title);
        header.appendChild(button);
    }

    const createListContainer = (card) => {
        let ul = document.createElement('ul');
        ul.id = 'cardItems';
        ul.classList.add('carditems');
        card.appendChild(ul);
    }
    return { createCard }
})(); 

export { projectCard, existingCards }