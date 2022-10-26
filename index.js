let username = /^[a-zA-Z]+/
let adress = /^([a-zA-Z]+(á[a-zA-Z]+)+).*[a-zA-Z]+,.*[0-9]+/
let number = /^[0-9]+/
let creditNumber = /^(?:5[1-5][0-9]{14})$/

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit').addEventListener('click', () => {
        var usernameInput = document.getElementById('name').value;
        var countryInput = document.getElementById('country').value;
        var cityInput = document.getElementById('city').value;
        var adressInput = document.getElementById('adress').value;
        var codeInput = document.getElementById('code').value;
        var cardInput = document.getElementById('card').value;


        checkUsername(usernameInput)
        checkCountry(countryInput)
        checkCity(cityInput)
        checkCode(codeInput)
        checkCard(cardInput)
    })

    

})

function checkUsername(input){
   if(!(username.test(input)) || input == null) {
    document.getElementById('tname').innerHTML = "Nem jo"
   }
   else {
    return console.log("ok")
   }
}

function checkCountry(input){
    if(!(username.test(input)) || input == null) {
     document.getElementById('countrya').innerHTML = "Nem jo"
    }
    else {
     return console.log("ok")
    }
 }

 function checkCity(input){
    if(!(username.test(input)) || input == null) {
     document.getElementById('citya').innerHTML = "Nem jo"
    }
    else {
     return console.log("ok")
    }
 }

function checkAdress(input){
    if(!(adress.test(input)) || input == null) {
        document.getElementById('adressa').innerHTML = "Nem jo"
       }
       else {
        return console.log("ok")
       }
}

function checkCode(input){
    if(!(number.test(input)) || input == null) {
        document.getElementById('codea').innerHTML = "Nem jo"
       }
       else {
        return console.log("ok")
       }
}

function checkCode(input){
    if(!(creditNumber.test(input)) || input == null) {
        document.getElementById('carda').innerHTML = "Nem jo"
       }
       else {
        return console.log("ok")
       }
}

