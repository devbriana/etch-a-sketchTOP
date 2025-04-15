var divContainer = document.getElementById('container');
var dimensionsDisplay = document.getElementById('dimensions-display')
var btn = document.querySelector('button');



var dimensions = 16;
var size;
var divCount = 0;

//button click to call getDimensions
btn.addEventListener("click", getDimensions)

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
        divContainer.appendChild(newDiv);
        newDiv.style.height = size;
        newDiv.style.width = size;
        console.log(i);

        i++;
        }
}

createDivs(divCount);


