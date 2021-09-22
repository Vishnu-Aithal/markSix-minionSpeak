var inputTextBox = document.querySelector("#input-text");
var outputTextBox = document.querySelector("#output-text");
var translateBtn = document.querySelector("#translate-btn");

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var url = "https://api.funtranslations.com/translate/minion.json"


function apiUrlConstructor(text) {
    // var encodedText = encodeURIComponent(text)
    // var queryUrl = `${url}?text=${encodedText}`;
    // console.log(encodeURI(queryUrl));
    // return encodeURI(queryUrl);
    return `${url}?text=${text}`;
}

// fetch(apiUrlConstructor("test")).then(responseFromServer => responseFromServer.json()).then(json => console.log(json.contents.translated))

translateBtn.addEventListener("click", clickHandler)

function clickHandler() {
    var inputText = inputTextBox.value;
    var apiUrl = apiUrlConstructor(inputText);
    fetch(apiUrl)
    .then(response => response.json())
    .then(json => outputTextBox.innerText = json.contents.translated)
    .catch(error => console.log(error));
}