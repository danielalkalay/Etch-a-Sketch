let gridsize = 10;
let mode = "pen";

const gameContainer = document.querySelector(".container");

const penBtn = document.querySelector(".pen");
const rainbowBtn = document.querySelector(".rainbow");
const borderBtn = document.querySelector(".border");
const randomBtn = document.querySelector(".random");
const clearBtn = document.querySelector(".clear");
const grayBtn = document.querySelector(".gray");

//create box item
function boxCreate() {
  let div = document.createElement("div");
  div.classList.add("box");
  div.style.border = "solid 1px white";
  return div;
}

//create a grid and append the boxes
function createGrid(gridsize) {
  for (let i = 0; i < gridsize ** 2; i++) {
    gameContainer.appendChild(boxCreate());
    gameContainer.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    gameContainer.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
  }
}
createGrid(gridsize);

function grayScale() {
  const boxes = gameContainer.querySelectorAll(".box");
  grayBtn.addEventListener("click", () => {
    console.log("click");
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let randomNum = Math.floor(Math.random() * 255);
        box.style.backgroundColor = `rgb(${randomNum}, ${randomNum}, ${randomNum})`;
      })
    );
  });
}
grayScale();

function penColor() {
  const boxes = gameContainer.querySelectorAll(".box");
  penBtn.addEventListener("click", () => {
    let inputColor = document.querySelector(".pen-color").value;
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = inputColor;
      })
    );
  });
}
penColor();

function borderColor() {
  const boxes = gameContainer.querySelectorAll(".box");
  borderBtn.addEventListener("click", () => {
    console.log("click");
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.classList.add("active");
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.borderColor = `rgb(${R}, ${G}, ${B})`;
      })
    );
  });
}
borderColor();

function rainbowColor() {
  const boxes = gameContainer.querySelectorAll(".box");
  rainbowBtn.addEventListener("click", () => {
    console.log("click");
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
      })
    );
  });
}
rainbowColor();

function randomColor() {
  const boxes = gameContainer.querySelectorAll(".box");
  randomBtn.addEventListener("click", () => {
    let randomPen = " ";
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);

    randomPen = `rgb(${R}, ${G}, ${B})`;

    console.log("click");
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = randomPen;
      })
    );
  });
}
randomColor();

function clearAll() {
  clearBtn.addEventListener("click", () => {
    while (gameContainer.firstChild) {
      gameContainer.remove(gameContainer.lastChild);
    }
  });
  createGrid(gridsize);
}
