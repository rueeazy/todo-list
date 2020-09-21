import { completeTask } from './completeTask';
import { menuCreate } from './menuCreateTask';
const deleteProject = (() => {

    const globalListener = () => {
        const deleteButtons = Array.from(document.getElementsByClassName('trashIcon'));
        deleteButtons.forEach(button => button.addEventListener('click', function(e) {
            if(confirm('Delete Project?')) {
                initiateDeleteProject(this);
            }
        }));
    }

    const initiateDeleteProject = (icon) => {
        let parentCard = icon.closest('[data-card]'); 
        let parentCardTitle = parentCard.querySelector('h3').innerText;
        let listItems = parentCard.querySelectorAll('[data-listitem]');
        deleteTaskObjects(listItems);
        deleteCard(parentCard);
        findMenuReference(parentCardTitle);
        
    }

    const deleteTaskObjects = (listItems) => {
        for(let item of listItems) {
            let title = item.querySelector('p').innerText;
            completeTask.linkTaskObject(title);
        }
    }

    const deleteCard = (parentCard) => {
        parentCard.remove();
        let cards = document.querySelectorAll('[data-card]');
        if(cards.length < 1) { menuCreate.hideCreateTask()}
    }

    const findMenuReference = (parentCardTitle) => {
        let menuReference;
        let projectNames = Array.from(document.getElementsByClassName('projectName'));
        for(let listName of projectNames) {
            if(listName.innerText == parentCardTitle) {
                menuReference = listName.closest('li');
            }
        }
        menuReference.remove();
    }
    
    return { globalListener }
})();

export { deleteProject }