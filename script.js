var divContainer = document.getElementById('container');
var dimensionsDisplay = document.getElementById('dimensions-display')
// buttons
var pixelsBtn = document.getElementById('pixels-btn');
var solidBtn = document.getElementById('solid-btn');
var greyScaleBtn = document.getElementById('grey-scale-btn')
var redBtn = document.getElementById('red-btn');
var orangeBtn = document.getElementById('orange-btn');
var yellowBtn = document.getElementById('yellow-btn');
var greenBtn = document.getElementById('green-btn');
var blueBtn = document.getElementById('blue-btn');
var purpleBtn = document.getElementById('purple-btn');
var multicolorBtn = document.getElementById('multicolor-btn');
var eraserBtn = document.getElementById('eraser-btn');
var buttons = document.querySelectorAll('.color-btn');


var currentMode;

var dimensions = 16;
var size;
var divCount = 0;

//button click to call getDimensions
pixelsBtn.addEventListener("click", getDimensions)

// ask user for how many squares they want per side
function getDimensions(e) {
    console.log(e.target);
    divContainer.textContent = "";
    divCount = 0;

    dimensions = prompt("How many squares per side? (100 maximum)"); 
    while (dimensions > 100) {
        alert("LESS THAN 100!"); 
        return getDimensions();
    } 

    divCount = howManyDivs(dimensions);
    size = divsSize(divCount);
    createDivs(divCount);
    dimensionsDisplay.textContent = "Dimensions: " + dimensions + "x" + dimensions;
    return dimensions;
}


dimensionsDisplay.textContent = "Dimensions: " + dimensions + "x" + dimensions;





// calculate (squares per side * squares per side) for total number of squares
// divCount contains total number of squares 

function howManyDivs(dimensions) {
    amount = dimensions * dimensions;
    for (let i = 0; i < amount; i++) {
        divCount++
    }
    return divCount;
}
howManyDivs(dimensions);
 
//adjust the size of each square based on the dimensions the user inputs
function divsSize(divCount) {
    size = ((600 * dimensions) / divCount) + "px";
    return size;
}
divsSize(divCount);

//create the squares according to the size calculated in the function above
function createDivs(divCount) {
    let i = 0;
    while (i < divCount) {
        const newDiv = document.createElement('div');
        newDiv.className = "new-div";
        const allSquares = document.querySelectorAll(".new-div");
        divContainer.appendChild(newDiv);
        newDiv.style.height = size;
        newDiv.style.width = size;
        // set up hover event listener
        solidBtn.addEventListener("click", changeDivColorSolid);
        greyScaleBtn.addEventListener("click", changeDivColorGrey);
        redBtn.addEventListener("click", changeDivColorRed);
        orangeBtn.addEventListener("click", changeDivColorOrange);
        yellowBtn.addEventListener("click", changeDivColorYellow);
        greenBtn.addEventListener("click", changeDivColorGreen);
        blueBtn.addEventListener("click", changeDivColorBlue);
        purpleBtn.addEventListener("click", changeDivColorPurple);
        multicolorBtn.addEventListener("click", changeDivColorMulti);
        eraserBtn.addEventListener("click", changeDivColorErase);

       // changeDivColor FUNCTIONS
        //solid black divs
        function changeDivColorSolid() {
            currentMode = "solid";
            newDiv.addEventListener("mouseover", updateSquares);
        }
        
        // grey divs
        function changeDivColorGrey() {
            currentMode = "grey";
            newDiv.addEventListener("mouseover", updateSquares);
        }
      
        // red divs
        function changeDivColorRed() {
            currentMode = "red";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // orange divs
        function changeDivColorOrange() {
            currentMode = "orange";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // yellow divs
        function changeDivColorYellow() {
            currentMode = "yellow";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // green divs
        function changeDivColorGreen() {
            currentMode = "green";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // blue divs
        function changeDivColorBlue() {
            currentMode = "blue";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // purple divs
        function changeDivColorPurple() {
            currentMode = "purple";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // multicolored divs
        function changeDivColorMulti() {
            currentMode = "multi";
            newDiv.addEventListener("mouseover", updateSquares);
        }

        // erase divs
        function changeDivColorErase() {
            currentMode = "erase";
            newDiv.addEventListener("mouseover", updateSquares);
        }
       
        // update div colors on mouseover based on currentMode
        function updateSquares() {
            switch (currentMode) {
                case "solid":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "black";
                    break;
        
                case "grey":
                    let currentOpacity = 0.2; // always start fresh at 0.2
                    newDiv.style.backgroundColor = "rgb(76, 77, 79)";
        
                    if (parseFloat(newDiv.style.opacity) < 1) {  //if on black square this runs false bc already 1, skips outside of condition 
                        currentOpacity = parseFloat(newDiv.style.opacity) + 0.2;
                    }
                    newDiv.style.opacity = currentOpacity; //sets opacity to 0.2 
                    break;

                case "red":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "rgb(199, 38, 38)";
                    break;

                case "orange":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "rgb(255, 157, 0)";
                    break;

                case "yellow":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "rgb(242, 242, 80)";
                    break;

                case "green":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "rgb(37, 156, 37)";
                    break;

                case "blue":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "rgb(0, 106, 255)";
                    break;

                case "purple":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "rgb(175, 10, 175)";
                    break;

                case "multi":
                    newDiv.style.opacity = 1;
                    random = Math.floor(Math.random() * 100) + 1;
                    if (random < 10) { 
                        newDiv.style.backgroundColor = "rgb(245, 184, 196)";
                    } else if (random > 10 && random < 20) {
                        newDiv.style.backgroundColor = "rgb(245, 184, 221)"
                    } else if (random > 20 && random < 30) {
                        newDiv.style.backgroundColor = "rgb(236, 184, 245)"
                    } else if (random > 30 && random < 40) {
                        newDiv.style.backgroundColor = "rgb(192, 184, 245)"
                    } else if (random > 40 && random < 50) {
                        newDiv.style.backgroundColor = "rgb(184, 209, 245)"
                    } else if (random > 50 && random < 60) {
                        newDiv.style.backgroundColor = "rgb(201, 245, 184)"
                    } else if (random > 70 && random < 80) {
                        newDiv.style.backgroundColor = "rgb(239, 245, 184)"
                    } else if (random > 80 && random < 90) {
                        newDiv.style.backgroundColor = "rgb(245, 220, 184)"
                    } else if (random > 90) {
                        newDiv.style.backgroundColor = "rgb(245, 199, 184)"
                    }
                    break;
                
                case "erase":
                    newDiv.style.opacity = 1;
                    newDiv.style.backgroundColor = "white";
                    break;
            }
        } 
        i++;
    }
}
createDivs(divCount);

// make buttons look clicked 
buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('selected')); // remove from all
      button.classList.add('selected'); // add to clicked
    });
  });