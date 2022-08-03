const black = "rgb(51, 51, 51)";
const erase = "rgb(255, 255, 255)"
const wrapper = document.querySelector(".wrapper");
const brushBtns = document.querySelectorAll(".brushOptions button");
const slider = document.querySelector("#slider");
const checkbox = document.querySelector("#checkbox");
let currentBrush;
let divs;
let gridSize = 32;

let isMouseDown = false;

const sliderText = document.querySelector("#sliderText");


slider.addEventListener("input", () => {
    if(slider.value < 10) {
        sliderText.innerHTML = `0${slider.value}x0${slider.value}`;
    } else {
        sliderText.innerHTML = `${slider.value}x${slider.value}`;
    }
})

slider.addEventListener("change", () => {
    gridSize = slider.value;
    createGrid(gridSize);
});

checkbox.addEventListener("click", ()=> {
    if (checkbox.checked) {
        setGridStyle(true)
    } else {
        setGridStyle(false)
    }
})

brushBtns.forEach(btn => btn.addEventListener("click", () => {
    brushBtns.forEach(btn => btn.classList.remove("selected"))
    verifyButton(btn.id);
    btn.classList.add("selected");
}));
    

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
            btn.classList.remove("selected");
            divs.forEach(div => {
                div.style.background = "white";
                
            })
            break;
    }
}

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
    setGridStyle(checkbox.checked);
}
function setGridStyle(checkbox) {
    let divSize = 640 / gridSize;
    divs = document.querySelectorAll(".wrapper div");
    divs.forEach(div => {
        checkbox ? div.classList.add("showGrid") : div.classList.remove("showGrid");
        div.classList.add("grid")
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.addEventListener("mouseover", () => div.style.background = currentColor(currentBrush));
    });
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