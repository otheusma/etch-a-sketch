const wrapper = document.querySelector(".wrapper");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        wrapper.append(document.createElement("div"));
    }
}

const divs = document.querySelectorAll(".wrapper div");

divs.forEach(div => {
    div.classList.add("grid")
});