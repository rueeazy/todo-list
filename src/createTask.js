import { Task } from './taskFactory';
import { newTaskDom } from './createTaskDOM';


const createTask = (() => {
    let parentCard;
    const taskForm = document.querySelector('#addTaskForm');

    const addTaskBtnListener = () => {
        const addTaskButtons = Array.from(document.getElementsByClassName('cardAddIcon'));
        addTaskButtons.forEach(list => list.addEventListener('click', showTaskForm));
    }

    function showTaskForm(e) {
        parentCard = e.target.parentElement.parentElement;
        taskForm.classList.add('show');
        addButtonListener();
    }
    const addButtonListener = () => {
        document.querySelector('#askAddTask').addEventListener('click', function(e) {
            e.preventDefault();
            let currentForm = this.parentElement;
            getInputs(currentForm);
        });
    }

    const getInputs = (currentForm) => {
        let taskTitle = currentForm.querySelector('#askTitle').value;
        let taskPriority = currentForm.querySelector('#askPriority').value;
        let taskDate = currentForm.querySelector('#askDueDate').value;
        let taskNote = currentForm.querySelector('#askNote').value;
        const newTask = Task(taskTitle, taskPriority, taskDate, taskNote);
        addTaskToList(newTask);
    }

    const addTaskToList = (newTask) => {
        newTaskDom.createTaskElements(parentCard, newTask.getTitle());
        clearAddTaskForm();
    }

    const clearAddTaskForm = () => {
        taskForm.classList.remove('show');
        taskForm.querySelector('#askTitle').value="";
        taskForm.querySelector('#askPriority').value="";
        taskForm.querySelector('#askDueDate').value="";
        taskForm.querySelector('#askNote').value="";
    }

    return { getInputs, addTaskBtnListener }
})();

export { createTask }