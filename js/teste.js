$(document).ready(function(){
    
jsonObj = loadNewVerse();
//console.log(jsonObj)
insertVerse(jsonObj);
//algmacoisa
});

function loadNewVerse(){//método carrega versículo aleatório da API
    let url = "https://bibleapi.co/api/verses/nvi/random"
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    console.log(xhttp.responseText)
    return JSON.parse(xhttp.responseText);
}

function insertVerse(jsonObject){//método insere versículo na tag com id 'dayVerse'
    message = `${jsonObject.text}  ${jsonObject.book.name} ${jsonObject.chapter}:${jsonObject.number}`
    $("#dayVerse").text(message);
}

//Método para navbar
$('.nav-link').on('click',function() { //quando um link é clicado, toda a navbar é encolhida
    $('.navbar-collapse').collapse('hide');
  });