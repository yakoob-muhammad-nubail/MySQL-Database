var titleOne = "title 1";
var titleTwo = "title 2";
var titleThree = "title 3";

var entryOne = "entry 1";
var entryTwo = "entry 2";
var entryThree = "entry 3";

var counter = 0;

setInterval(function newNote() {
    if (counter === 3) {
        clearInterval(intervalID);
        return; // Exit the function
    }

    const createDiv = document.createElement("div");

    // Create title element
    const titleElement = document.createElement("pre");
    const titleText = document.createTextNode(titleOne);
    titleElement.appendChild(titleText);
    titleElement.style.fontFamily = "Arial, Helvetica, sans-serif";
    titleElement.style.margin = "10px";
    titleElement.style.boxSizing = "border-box";
    titleElement.style.display = "block";

    // Create entry element
    const entryElement = document.createElement("pre");
    const entryText = document.createTextNode(entryOne);
    entryElement.appendChild(entryText);
    entryElement.style.fontFamily = "Arial, Helvetica, sans-serif";
    entryElement.style.margin = "10px";
    entryElement.style.boxSizing = "border-box";
    entryElement.style.display = "block";

    // Append title and entry to the new div
    createDiv.appendChild(titleElement);
    createDiv.appendChild(entryElement);

    // Append new div to the note_slips container
    document.getElementById("note_slips").appendChild(createDiv);

    // Style the new div
    createDiv.style.backgroundColor = "white";
    createDiv.style.width = "400px";
    createDiv.style.height = "200px"; // Change height to auto to adjust based on content
    createDiv.style.margin = "10px";
    createDiv.style.padding = "10px";
    createDiv.style.boxSizing = "border-box";
    createDiv.style.borderRadius = "15px"; // Add rounded corners
    createDiv.style.boxShadow = "0 0 5px #000000";

    counter++;
}, 1000);