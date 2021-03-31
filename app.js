var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text){

    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("error ocurred: ", error);
    alert("There is something wrong with the server! please try later.")
}

  function clickEventHandler(){
      var inputtext = txtInput.value;
      
      fetch(getTranslationURL(inputtext))
      .then(response => response.json())
      .then(json => {
          txtOutput.innerText = json.contents.translated;
      } )
      .catch(errorHandler);
 }

btntranslate.addEventListener("click", clickEventHandler);