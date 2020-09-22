import Sortable from "sortablejs";
import { Task, existingTasks } from './taskFactory';
import { createTaskDom } from './createTaskDOM';

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
        parentCard = e.target.closest('[data-card]');
        taskForm.classList.add('show');
    }

    const getInputs = (currentForm) => {
        let taskTitle = currentForm.querySelector('#askTitle').value;
        let taskPriority = currentForm.querySelector('#askPriority').value;
        let taskDate = currentForm.querySelector('#askDueDate').value;
        let taskNote = currentForm.querySelector('#askNote').value;
        createTaskObject(taskTitle, taskPriority, taskDate, taskNote);
        hideTaskForm(currentForm);
        // Add sortable library so tasks can be manipulated
        let el = document.getElementById("cardItems");
        let sortable = Sortable.create(el, { animation: 150 });
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
        createTaskDom.createTaskElements(parentCard, newTask);
        existingTasks.push(newTask);
        updateMenuCount() 
    }

    const updateMenuCount = () => {
        let tasks = parentCard.querySelectorAll('[data-listitem]');
        let menuItems = Array.from(document.querySelectorAll('.projectItem'));
        let project = menuItems.filter(item => item.dataset.projectItem == parentCard.dataset.projectItem)[0];
        let projectCount = project.lastElementChild
        projectCount.textContent = tasks.length;
    }

    return { getInputs, addTaskBtnListener, submitTaskFormListener }
})();

export { createTask }