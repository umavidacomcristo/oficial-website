$(document).ready(function(){
    
jsonObj = loadNewVerse();
console.log(jsonObj)
insertVerse(jsonObj);

    
});

function loadNewVerse(){
    let url = "https://bibleapi.co/api/verses/nvi/random"
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    console.log(xhttp.responseText)
    return JSON.parse(xhttp.responseText);
}

function insertVerse(jsonObject){
    message = `${jsonObject.text}  ${jsonObject.book.name} ${jsonObject.chapter}:${jsonObject.number}`
    $("#dayVerse").text(message);
}