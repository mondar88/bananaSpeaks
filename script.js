var inputTxt = document.querySelector("#input-text");
var buttonTranslate = document.querySelector("#btnTrans");
var outputTxt = document.querySelector("#output");
//input
function displayfunction(){
    console.log("now it is clicked!");
    var urlHead = getURL(inputTxt.value);
    outputis(urlHead);
}

//processing
function getURL(extension){
    var apiUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
    var header = apiUrl+"?"+"text="+extension;
    console.log(header);
    return header;

}

//error handling
function errorHandler(error){
    console.log("we encountered some error!", error);
    alert("Seems server is down! come back after a while.")
}

//output
function outputis(urlHead){
    fetch(urlHead)
    .then(response => response.json())
    .then(function writeToOutput(json){
        outputTxt.textContent = json.contents.translated;
    })
    .catch(errorHandler)
}

buttonTranslate.addEventListener("click", displayfunction);