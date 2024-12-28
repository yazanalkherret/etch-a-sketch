let gridSize = 16;
let cellSize = 50;
let cells = [];

//Add cells to grid
const grid = document.querySelector("#grid");
let gridLength = gridSize * (cellSize + 2);
grid.style["height"] = gridLength + "px";
grid.style["width"] = gridLength + "px";

for(let i = 0; i < gridSize; i++){
    cells[i] = [];

    for(let j = 0; j < gridSize; j++){
        cells[i][j] = document.createElement("div");
        cells[i][j].setAttribute("class", "cell");
        cells[i][j].style["height"] = cellSize + "px";
        cells[i][j].style["width"] = cellSize + "px";
        grid.appendChild(cells[i][j]);
    }
}
