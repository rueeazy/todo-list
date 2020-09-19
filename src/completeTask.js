import { completeTaskDOM } from './completeTaskDOM';
const completeTask = (() => {

    // Add global complete listener when reloading page

    const addListeners = (li) => {
        let completeButton = li.querySelector('.checkbox');
        completeButton.addEventListener('click', function(e) {
            completeTaskDOM.completeTask(li);
        })

        let deleteButton = li.querySelector('#itemDelete');
        deleteButton.addEventListener('click', function(e) {
            completeTaskDOM.deleteTask(li);
        })
    }

    return { addListeners }
})();

export { completeTask }