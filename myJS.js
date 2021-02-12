/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
let block = document.getElementById("color-block");
let colorCode = document.getElementById("color-name");

function changeColor(){
    //Write a condition determine what color it should be changed to

    const blockClass = block.className;
    if(blockClass === "block1"){
        //change the background color using JS
        block.setAttribute("class", "block2");
        //Change the text of the color using the span id color-name
        colorCode.innerText = "#FFFF99";
    }
    else{
        //change the background color using JS
        block.setAttribute("class", "block1");
        //Change the text of the color using the span id color-name
        colorCode.innerText = "#F08080";

    }
}

block.addEventListener("click", changeColor);

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
let submitButton = document.getElementById("convertbtn");
let inputBar = document.getElementById("f-input");
let outputBar = document.getElementById("c-output");

function convertTemp(){
    //Calculate the temperature here
    let f = parseFloat(inputBar.value);
    if (isNaN(f)) {
        alert("Please input a valid number!");
        return;
    }
    let ct = (f - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    outputBar.innerText = ct;
}

submitButton.addEventListener("click", convertTemp);


