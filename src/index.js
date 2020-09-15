import Sortable from "sortablejs";

var el = document.getElementById("cardItems");
let sortable = new Sortable(el, {
    animation: 150
})