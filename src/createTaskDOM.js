import { completeTask } from './completeTask';
const createTaskDom = (() => {

    const createTaskElements = (parentCard, title) => {
        let ul = parentCard.lastElementChild;
        let existingListItems = Array.from(ul.querySelectorAll('[data-listitem]'));
        let taskCount;
        if(existingListItems.length < 1) {
            taskCount = 0;
        } else {
            taskCount = existingListItems.length;
        }
        createTaskContainer(ul, taskCount, title);
    }

    const createTaskContainer = (ul, taskCount, title) => {
        let li = document.createElement('li');
        li.dataset.listitem = `${taskCount}`;
        addCheckBox(li);
        addTextContainer(li, title);   
        addHiddenDelete(li); 
        ul.appendChild(li);
        completeTask.addListeners(li);
        // updateTask.addListener(li);
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


    return { createTaskElements }
})();

export { createTaskDom }
