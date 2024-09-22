const container = document.querySelector("#container");
const div_size = "30px";
let grid_size = 16;
container.style.width = `${parseInt(div_size) * grid_size}px`;
const colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]


function randomColour() {
    return Math.floor(Math.random() * 7);
};


function createButton() {
    const button = document.createElement("button");
    button.textContent = "Click me to change grid size!";
    document.body.insertBefore(button, document.body.firstChild);

    button.addEventListener("click", () => {
        let new_size = parseInt(prompt("Change the number of squares per side", "Type a number from 0 to 100"));
        if (!Number.isInteger(new_size) || new_size < 0 || new_size > 100) {
            alert("Invalid input");
        } else {
            grid_size = new_size;
            container.innerHTML = '';
            makeGrid(grid_size);
            container.style.width = `${parseInt(div_size) * grid_size}px`;
        };
    });
}


function makeGrid(grid_size) {
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.style.width = div_size;
            div.style.height = div_size;
            div.style.boxSizing = "border-box";
            container.appendChild(div);
        };
    };   

    const divs = document.querySelectorAll("#container > div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.background ? div.style.background : div.style.background = colours[randomColour()];
        });
    });
    
};


makeGrid(grid_size);
createButton();
