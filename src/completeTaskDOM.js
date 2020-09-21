const completeTaskDOM = (() => {

    const completeTask = (li) => {
        li.classList.toggle('completed');
        li.classList.remove('high', 'medium', 'low');
    }

    const deleteTask = (li) => {
        li.remove();
    }

    return { completeTask, deleteTask }
})();

export {completeTaskDOM}