var divContainer = document.getElementById('container');
var dimensionsDisplay = document.getElementById('dimensions-display')
// buttons
var pixelsBtn = document.getElementById('pixels-btn');
var solidBtn = document.getElementById('solid-btn');
var greyScaleBtn = document.getElementById('grey-scale-btn')
var multicolorBtn = document.getElementById('multicolor-btn');

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
console.log("divCount " + divCount);
 
//adjust the size of each square based on the dimensions the user inputs
function divsSize(divCount) {
    size = ((600 * dimensions) / divCount) + "px";
    return size;
}
divsSize(divCount);
console.log("size of each div: " + size);

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
        console.log(i);
        // set up hover event listener
        solidBtn.addEventListener("click", changeDivColorSolid);
        greyScaleBtn.addEventListener("click", changeDivColorGrey);
        multicolorBtn.addEventListener("click", changeDivColorMulti);

        //solid divs
        function changeDivColorSolid() {
            /*allSquares.forEach((square) => {
                newDiv.style.backgroundColor = "white";
                newDiv.style.opacity = 1;
            })*/
            currentMode = "solid";
            console.log("solid button clicked");
            console.log(currentMode);
            newDiv.addEventListener("mouseover", updateSquares);
        }
        

        // grey divs
        function changeDivColorGrey() {
            allSquares.forEach((square) => {
                //newDiv.style.backgroundColor = "white";
                //newDiv.style.opacity = 0;
            })
            currentMode = "grey";

            console.log("grey button clicked");
            console.log(currentMode);
            newDiv.addEventListener("mouseover", updateSquares);

        }
      

        // multicolored divs
        function changeDivColorMulti() {
            /*allSquares.forEach((square) => {
                newDiv.style.backgroundColor = "white";
                newDiv.style.opacity = 1;
            })*/
            currentMode = "multi";
            console.log("color button clicked");
            console.log(currentMode);
            newDiv.addEventListener("mouseover", updateSquares);
        }
       
        function updateSquares() {
            if (currentMode === "solid") {
                newDiv.style.opacity = 1;
                newDiv.style.backgroundColor = "black";
            }
            else if (currentMode === "grey") {
                let currentOpacity = parseFloat(newDiv.style.opacity) || 0; // start at 0 if not set
                newDiv.style.backgroundColor = "rgba(76, 77, 79)";
            
                if (currentOpacity < 1) {
                    currentOpacity += 0.2;
                }
                newDiv.style.opacity = currentOpacity;
            } else if (currentMode === "multi") {
                newDiv.style.opacity = 1;
                newDiv.style.backgroundColor = "pink";

            }
          

        }

        i++;
        }

   
}

createDivs(divCount);