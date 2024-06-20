const grid = document.querySelector(".grid");

createGrid(64);

function createGrid (size) {
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
