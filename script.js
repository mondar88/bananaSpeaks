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
    var header = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"+"?"+"text="+extension;
    console.log(header);
    return header;

}
//output
function outputis(urlHead){
    fetch(urlHead)
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}


buttonTranslate.addEventListener("click", displayfunction);