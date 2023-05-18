const drag_item = document.querySelectorAll('.drag-item');
const drag_list = document.querySelectorAll('.drag-item-list');


let seleteItem;

drag_item.forEach((item) => {
    item.addEventListener('dragstart', onDragstart);
});

drag_list.forEach((list) => {
    list.addEventListener('dragover', onDragOver);
    list.addEventListener('dragenter', onDragEnter);
    list.addEventListener('drop',onDrop);
})

function onDrop() {
    this.append(seleteItem);
    seleteItem = null;
}

function onDragstart() {
    seleteItem = this;
    // console.log(seleteItem)
}

function onDragOver(e) {
    e.preventDefault();
}

function onDragEnter(e) {
    e.preventDefault();
}
