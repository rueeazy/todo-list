let existingTasks = [];

const Task = (title, priority, dueDate, note, ) => {
    let taskTitle = title
    let taskPriority = priority
    let taskDueDate = dueDate
    let taskNote = note


    const getTitle = () => title;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getNote = () => note;

    return {
        getTitle,
        getPriority,
        getDueDate,
        getNote,
        taskTitle,
        taskPriority,
        taskDueDate,
        taskNote
    }
}

export { Task, existingTasks }