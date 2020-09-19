import { Task } from './taskFactory';
import { createTaskDom } from './createTaskDOM';
import { create } from 'sortablejs';


const createTask = (() => {
    let parentCard;
    let taskForm = document.querySelector('#addTaskForm');

    const addTaskBtnListener = () => {
        const addTaskButtons = Array.from(document.getElementsByClassName('cardAddIcon'));
        addTaskButtons.forEach(list => list.addEventListener('click', showTaskForm));
    }

    const submitTaskFormListener = () => {
        document.querySelector('#askAddTask').addEventListener('click', function(e) {
            e.preventDefault();
            let currentForm = this.parentElement;
            getInputs(currentForm);
        });
    }

    function showTaskForm(e) {
        parentCard = e.target.parentElement.parentElement;
        taskForm.classList.add('show');
    }

    const getInputs = (currentForm) => {
        let taskTitle = currentForm.querySelector('#askTitle').value;
        let taskPriority = currentForm.querySelector('#askPriority').value;
        let taskDate = currentForm.querySelector('#askDueDate').value;
        let taskNote = currentForm.querySelector('#askNote').value;
        createTaskObject(taskTitle, taskPriority, taskDate, taskNote);
        hideTaskForm(currentForm);
    }

    const createTaskObject = (taskTitle, taskPriority, taskDate, taskNote) => {
        let newTask = Task(taskTitle, taskPriority, taskDate, taskNote);
        addTaskToList(newTask);
    }

    const hideTaskForm = (currentForm) => {
        currentForm.reset();
        taskForm.classList.remove('show');
    }

    const addTaskToList = (newTask) => {
        createTaskDom.createTaskElements(parentCard, newTask.getTitle());
    }

    return { getInputs, addTaskBtnListener, submitTaskFormListener }
})();

export { createTask }