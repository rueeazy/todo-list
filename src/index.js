import Sortable from "sortablejs";
import { createList } from './createProjectCard';
import { createTask } from './createTask';
import { updateTask } from './updateTask';


createList.addNewList;
createTask.addTaskBtnListener();
createTask.submitTaskFormListener();
updateTask.globalListener();

// var el = document.getElementById("cardItems");
// let sortable = new Sortable(el, {
//     animation: 150
// });




