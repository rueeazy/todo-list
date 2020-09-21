import Sortable from "sortablejs";
import { createList } from './createProjectCard';
import { createTask } from './createTask';
import { updateTask } from './updateTask';
import { listCard } from './menuProjectCard';
import { menuCreate } from './menuCreateTask';


createList.addNewList;
createTask.addTaskBtnListener();
createTask.submitTaskFormListener();
updateTask.globalListener();
listCard.globalListener();
menuCreate.globalListener();

var el = document.getElementById("cardItems");
let sortable = new Sortable(el, {
    animation: 150
});




