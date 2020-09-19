const completeTaskDOM = (() => {

    const completeTask = (li) => {
        li.classList.toggle('completed');
    }

    const deleteTask = (li) => {
        li.remove();
    }

    return { completeTask, deleteTask }
})();

export {completeTaskDOM}