import { completeTask } from './completeTask';
import { updateTask } from './updateTask';
const createTaskDom = (() => {

    const createTaskElements = (parentCard, newTask) => {
        let ul = parentCard.lastElementChild;
        let existingListItems = Array.from(ul.querySelectorAll('[data-listitem]'));
        let taskCount;
        if(existingListItems.length < 1) {
            taskCount = 0;
        } else {
            taskCount = existingListItems.length;
        }
        createTaskContainer(ul, taskCount, newTask);
    }

    const createTaskContainer = (ul, taskCount, newTask) => {
        let li = document.createElement('li');
        li.dataset.listitem = `${taskCount}`;
        addCheckBox(li);
        addTextContainer(li, newTask.taskTitle);   
        addHiddenDelete(li);
        addPriority(li, newTask.taskPriority); 
        ul.appendChild(li);
        completeTask.addListeners(li);
        updateTask.globalListener();
    }

    const addCheckBox = (li) => {
        let input = document.createElement('input');
        input.setAttribute("type", "checkbox");
        input.setAttribute("value", "incomplete");
        input.classList.add("checkbox");
        li.appendChild(input); 
    }

    const addTextContainer = (li, title) => {
        let para = document.createElement('p');
        para.textContent = `${title}`;
        li.appendChild(para);
    }

    const addHiddenDelete = (li) => {
        let itemDelete = document.createElement('i');
        itemDelete.classList.add('fas', 'fa-times-circle', 'itemDelete');
        itemDelete.id = 'itemDelete';
        itemDelete.setAttribute("aria-hidden", "true");
        li.appendChild(itemDelete);
    }

    const addPriority = (li, priority) => {
        if(priority == 'low') {
            li.classList.add('low');
        } else if(priority == 'medium') {
            li.classList.add('medium');
        } else {
            li.classList.add('high');
        }
    }


    return { createTaskElements }
})();

export { createTaskDom }
