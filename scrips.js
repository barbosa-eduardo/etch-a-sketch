const grid = document.querySelector(".grid");

function createGrid () {
    let size = getSize();
    clearGrid();
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover", () => {
                square.classList.add("selected");
            });

            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function getSize() {
    let size = document.querySelector(".input_size").value;
    if (size >= 100) {
        size = 100;
    }
    return size;
}

function clearGrid() {
    const gridChilds = grid.childNodes;
    for (let i = gridChilds.length - 1; i >= 0; i--) {
        gridChilds[i].remove();
    }
}