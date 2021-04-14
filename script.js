var inputTxt = document.querySelector("#input-text");
var buttonTranslate = document.querySelector("#btnTrans");
var outputTxt = document.querySelector("#output");
//input
function displayfunction(){
    console.log("now it is clicked!");
    console.log(inputTxt.value);
    outputis();
}


//output
function outputis(){
    outputTxt.textContent = inputTxt.value;
}
buttonTranslate.addEventListener("click", displayfunction);