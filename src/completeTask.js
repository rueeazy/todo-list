import { completeTaskDOM } from './completeTaskDOM';
const completeTask = (() => {
    let parentCard;

    // Add global complete listener when reloading page

    const addListeners = (li) => {
        let completeButton = li.querySelector('.checkbox');
        completeButton.addEventListener('click', function(e) {
            completeTaskDOM.completeTask(li);
        })

        let deleteButton = li.querySelector('#itemDelete');
        deleteButton.addEventListener('click', function(e) {
            parentCard = this.parentElement.parentElement.parentElement;
            updateMenuCount();
            completeTaskDOM.deleteTask(li);
        })
    }

    const updateMenuCount = () => {
        let tasks = parentCard.querySelectorAll('[data-listitem]');
        let menuItems = Array.from(document.querySelectorAll('.projectItem'));
        let project = menuItems.filter(item => item.dataset.projectItem == parentCard.dataset.projectItem)[0];
        let projectCount = project.lastElementChild
        projectCount.innerText = tasks.length - 1;
    }

    return { addListeners }
})();

export { completeTask }