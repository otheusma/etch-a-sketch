const black = "rgb(51, 51, 51)";
const erase = "rgb(255, 255, 255)"
const wrapper = document.querySelector(".wrapper");
const brushBtns = document.querySelectorAll(".brushOptions button");
let currentBrush;
let divs;
let gridSize = 32;

createGrid(gridSize);

function clearGrid() {
    wrapper.textContent = "";
}

function createGrid(gridSize){
    clearGrid();
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            wrapper.append(document.createElement("div"));
        }
    }
    setGridStyle();
}

const slider = document.querySelector("#slider");
slider.addEventListener("change", () => {
    gridSize = slider.value;
    createGrid(gridSize);
});

brushBtns.forEach(btn => {
    btn.addEventListener("click", () => verifyButton(btn.id))
    function verifyButton(btnId) {
        switch(btnId) {
            case "black": 
                currentBrush = "black";
                break;
            case "rainbow":
                currentBrush = "rainbow";
                break;
            case "erase":
                currentBrush = "erase";
                break;
            case "clear":
                divs.forEach(div => {
                    div.style.background = "white";
                })
                break;
        }
    }
});

function setGridStyle() {
    let divSize = 640 / gridSize;
    divs = document.querySelectorAll(".wrapper div");
    divs.forEach(div => {
        div.classList.add("grid")
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.addEventListener("mouseover", () => div.style.background = currentColor(currentBrush));
    })
}

function currentColor(color){
    switch(color) {
        case "rainbow":
            return randomColor();
        case "erase":
            return erase;
        default:
            return black;
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}