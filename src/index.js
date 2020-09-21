import Sortable from "sortablejs";
import { createList } from './createProjectCard';
import { createTask } from './createTask';
import { updateTask } from './updateTask';
import { listCard } from './menuProjectCard';


createList.addNewList;
createTask.addTaskBtnListener();
createTask.submitTaskFormListener();
updateTask.globalListener();
listCard.globalListener();

// var el = document.getElementById("cardItems");
// let sortable = new Sortable(el, {
//     animation: 150
// });




