function drawGrid() {
    //To remove all child elements (necessary when redrawing graph)
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    // calc cell size:
    let cellSize = (960 / gridSize) - 2;

    for (let i = 0; i < gridSize; i++) {
        cells[i] = [];

        for (let j = 0; j < gridSize; j++) {
            cells[i][j] = document.createElement("div");
            cells[i][j].setAttribute("class", "cell");
            cells[i][j].style["height"] = cellSize + "px";
            cells[i][j].style["width"] = cellSize + "px";
            grid.appendChild(cells[i][j]);
        }
    }
}

function getUserEntry() {
    let userEntry = window.prompt("Enter number of cells:\nMax 100");
    if (userEntry > 0 && userEntry <= 100) {
        //valid
        gridSize = Number(userEntry);
        drawGrid();
    }
    else {
        alert("Invalid input");
    }
}

function getRandomColorFormatted(){
    let randomNums = [];
    for (let i = 0; i < 3; i++){
        randomNums[i] = Math.floor(Math.random() * 1000) % 255;
    }
    console.log(`${randomNums[0]}, ${randomNums[1]}, ${randomNums[2]}`);
    return `rgb(${randomNums[0]}, ${randomNums[1]}, ${randomNums[2]})`;
}

let gridSize = 16;
let cells = [];

const grid = document.querySelector("#grid");
grid.addEventListener("mouseover", (event) => {
    //event.target.classList.add("hover");
    event.target.style["background-color"] = getRandomColorFormatted();
});

const userBtn = document.querySelector("button");
userBtn.addEventListener("click", () =>{
    getUserEntry();
});

drawGrid();
