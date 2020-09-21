
const listCard = (() => {
    let ul = document.querySelector('#projects');
    let cardsContainer = document.querySelector('#tasks-container');

    const hideCards = (card) => {
        card.classList.add('hide');
    }

    const showCards = (card) => {
        card.classList.remove('hide');
    }

    const globalListener = () => {
        let projects = ul.querySelectorAll('.projectItem');
        projects.forEach(li => li.addEventListener('click', getProject));
    }

    function getProject(e) {
        hideOtherProjects(this);
    }

    const hideOtherProjects = (currentProject) => {
        let cards = cardsContainer.querySelectorAll('.project-card');
        for(let card of cards) {
            if(card.dataset.projectItem != currentProject.dataset.projectItem) {
                hideCards(card);
            } else {
                showCards(card);
            }
        }
    }

    return { globalListener }

})();

export { listCard }