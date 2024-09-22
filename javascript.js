const container = document.querySelector("#container");
const div_size = "30px";
container.style.width = `${parseInt(div_size) * 16}px`;




function makeGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.textContent = "hi";
            div.style.width = div_size;
            div.style.height = div_size;
            div.style.boxSizing = "border-box";
            container.appendChild(div);
        };
    };    
};

makeGrid();
const divs = document.querySelectorAll("#container > div");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.background = "skyblue";
    });
});

