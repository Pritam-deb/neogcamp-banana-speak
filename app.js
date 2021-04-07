console.log("Translated you thing.");
// var userName = prompt("Enter your name");

// alert("you are in right page "+userName);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
console.log(btnTranslate);

function clickEvent() {
    console.log("Clicked!");
    console.log("value", textInput.value);

}

outputDiv.innerHTML("yo")

btnTranslate.addEventListener("click", clickEvent);