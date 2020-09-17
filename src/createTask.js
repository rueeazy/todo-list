const task = (title, priority, dueDate, note) => {
    const getTitle = () => title;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getNote = () => note;

    return {
        getTitle,
        getPriority,
        getDueDate,
        getNote
    }
}

export { task }