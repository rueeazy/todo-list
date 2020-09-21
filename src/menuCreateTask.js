import { Task, existingTasks } from './taskFactory';
import { createTaskDom } from './createTaskDOM';

const menuCreate = (()=> {
    const taskForm = document.querySelector('#menuTaskForm')
    const currentForm = taskForm.querySelector('form');
    let taskCards = document.getElementsByClassName('project-card');
    let parentCardTitle;

    const globalListener = () => {
        document.querySelector('#menu-button').addEventListener('click', showForm);
        taskForm.querySelector('#menuAddTask').addEventListener('click', getInputs);
        if(Array.from(taskCards).length < 1) { hideCreateTask() }
    }

    const hideCreateTask = () => {
        document.querySelector('#menu-button').classList.add('hide');
    }

    const showForm = (e) => {
        taskForm.classList.add('show');
        options();
    }

    const getInputs = (e) => {
        e.preventDefault();
        parentCardTitle = currentForm.querySelector('#projectList').value;
        let taskTitle = currentForm.querySelector('#menuTitle').value;
        let taskPriority = currentForm.querySelector('#menuPriority').value;
        let taskDate = currentForm.querySelector('#menuDueDate').value;
        let taskNote = currentForm.querySelector('#menuNote').value;
        createTaskObject(taskTitle, taskPriority, taskDate, taskNote);
    }

    const options = () => {
        taskCards = document.querySelectorAll('[data-card]');
        for(let card of taskCards) {
            let cardTitle = card.querySelector('h3').innerText;
            addOption(cardTitle);
        }
    }

    //adds options to dom eeeeghh
    const addOption = (cardTitle) => {
        let select = currentForm.querySelector('select');
        let option = document.createElement('option');
        option.setAttribute('value', `${cardTitle}`);
        option.innerText = cardTitle;
        select.appendChild(option);
    }

    const createTaskObject = (taskTitle, taskPriority, taskDate, taskNote) => {
        let newTask = Task(taskTitle, taskPriority, taskDate, taskNote);
        addTaskToList(newTask);
    }

    const addTaskToList = (newTask) => {
        let projectCard;
        Array.from(taskCards).forEach(function(card) {
            let cardTitle = card.querySelector('h3').innerText;
            if(cardTitle == parentCardTitle) {
                projectCard = card;
            }
        })
        console.log(projectCard);
        createTaskDom.createTaskElements(projectCard, newTask);
        existingTasks.push(newTask);
        updateMenuCount(projectCard);
        hideTaskForm() 
    }

    const hideTaskForm = () => {
        taskForm.querySelector('form').reset();
        taskForm.classList.remove('show');
        resetOptions();
    }

    const resetOptions = () => {
        Array.from(currentForm.querySelector('select')).forEach(option => option.remove());
    }

    const updateMenuCount = (projectCard) => {
        let tasks = projectCard.querySelectorAll('[data-listitem]');
        let menuItems = Array.from(document.querySelectorAll('.projectItem'));
        let project = menuItems.filter(item => item.dataset.projectItem == projectCard.dataset.projectItem)[0];
        let projectCount = project.lastElementChild
        projectCount.innerText = tasks.length;
    }

    return { globalListener, hideCreateTask }

})();

export { menuCreate }