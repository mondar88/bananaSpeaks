var inputTxt = document.querySelector("#input-text");
var buttonTranslate = document.querySelector("#btnTrans");
var outputTxt = document.querySelector("#output");

function displayfunction(){
    console.log("now it is clicked!");
    console.log(inputTxt.value);
}
buttonTranslate.addEventListener("click", displayfunction);