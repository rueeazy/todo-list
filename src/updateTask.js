import { existingTasks } from "./taskFactory";


const updateTask = (() => {
    let taskForm = document.querySelector('#viewTaskForm');
    let workingLi;
    
    const globalListener = () => {
        let items = document.querySelectorAll('[data-listitem]');
        items.forEach(item => item.addEventListener('click', handleClick));
    }

    function handleClick(e) {
        e.preventDefault();
        if(e.target.classList.contains("checkbox") || e.target.classList.contains("itemDelete")) {
            e.defaultPrevented();
        }
        workingLi = this;
        let title = this.querySelector('p').innerText;
        linkTaskObject(title);
    }

    const linkTaskObject = (title) => {
        let linkedTask;
        for(let task of existingTasks) {
            if(task.taskTitle == title) {
                linkedTask = task;
            }
        } 
        viewTaskForm(linkedTask);
    }

    const viewTaskForm = (linkedTask) => {
        taskForm.querySelector('#viewTitle').value = linkedTask.taskTitle;
        taskForm.querySelector('#viewPriority').value = linkedTask.taskPriority;
        taskForm.querySelector('#viewDueDate').value = linkedTask.taskDueDate;
        taskForm.querySelector('#viewNote').value = linkedTask.taskNote;
        taskForm.classList.add('show');
        addReturnListener(linkedTask);   
    }

    const addReturnListener = (linkedTask) => {
        taskForm.querySelector('#return').addEventListener('click', function(e) {
            e.preventDefault();
            updateTaskObject(linkedTask);
            returnToList(linkedTask);
        }, {once: true});
    }

    const updateTaskObject = (linkedTask) => {
        linkedTask.taskTitle = taskForm.querySelector('#viewTitle').value;
        linkedTask.taskPriority = taskForm.querySelector('#viewPriority').value;
        linkedTask.task8DueDate = taskForm.querySelector('#viewDueDate').value;
        linkedTask.taskNote = taskForm.querySelector('#viewNote').value;
    }

    const returnToList = (linkedTask) => {
        workingLi.querySelector('p').innerText = linkedTask.taskTitle;
        taskForm.classList.remove('show');
        taskForm.querySelector('form').reset();
    }

    
    
    return { globalListener }
})();

export { updateTask }