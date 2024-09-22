const container = document.querySelector("#container");
const div_size = "30px";
let grid_size = 16;
container.style.width = `${parseInt(div_size) * grid_size}px`;


function createButton() {
    const button = document.createElement("button");
    button.textContent = "Click me to change size!";
    document.body.insertBefore(button, document.body.firstChild);

    button.addEventListener("click", () => {
        new_size = parseInt(prompt("Please choose a size that's less than 100"));
        if (!Number.isInteger(new_size) || new_size < 0 || new_size > 100) {
            alert("Invalid input");
        } else {
            grid_size = new_size;
            makeGrid(grid_size);
        };
    });
}



function makeGrid(grid_size) {
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.textContent = "hi";
            div.style.width = div_size;
            div.style.height = div_size;
            div.style.boxSizing = "border-box";
            container.appendChild(div);
        };
    };   

    const divs = document.querySelectorAll("#container > div");
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.background = "skyblue";
        });
    });
    
};


makeGrid(grid_size);
createButton();

