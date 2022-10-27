let username = /^[a-zA-Z]+/
let adress = /^([a-zA-Z]+(á[a-zA-Z]+)+).*[a-zA-Z]+,.*[0-9]+/
let number = /^[0-9]+/
let creditNumber = /^(?:5[1-5][0-9]{14})$/
let cvc = /^[0-9]{3}/
let cardName = /^[a-z ,.'-]+$/i

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit').addEventListener('click', () => {
        var usernameInput = document.getElementById('name').value;
        var countryInput = document.getElementById('country').value;
        var cityInput = document.getElementById('city').value;
        var adressInput = document.getElementById('adress').value;
        var codeInput = document.getElementById('code').value;
        var cardInput = document.getElementById('card').value;
        var cvcInput = document.getElementById('cvc').value;
        var cardnameInput = document.getElementById('cardname').value;

        

        checkUsername(usernameInput)
        checkCountry(countryInput)
        checkCity(cityInput)
        checkCode(codeInput)
        checkCard(cardInput)
        checkCVC(cvcInput)
        checkCardname(cardnameInput)
    })

    

})

function checkUsername(input){
   if(!(username.test(input)) || input == null) {
    document.getElementById('tname').innerText = "Nem jo"
    document.getElementById('tname').style.color = "red"
   }
   else {
    return console.log("ok")
   }
}

function checkCountry(input){
    if(!(username.test(input)) || input == null) {
     document.getElementById('countrya').innerText = "Nem jo"
     document.getElementById('countrya').style.color = "red"
    }
    else {
     return console.log("ok")
    }
 }

 function checkCity(input){
    if(!(username.test(input)) || input == null) {
     document.getElementById('citya').innerText = "Nem jo"
     document.getElementById('citya').style.color = "red"
    }
    else {
     return console.log("ok")
    }
 }

function checkAdress(input){
    if(!(adress.test(input)) || input == null) {
        document.getElementById('adressa').innerText = "Nem jo"
        document.getElementById('adressa').style.color = "red"
       }
       else {
        return console.log("ok")
       }
}

function checkCode(input){
    if(!(number.test(input)) || input == null) {
        document.getElementById('codea').innerText = "Nem jo"
        document.getElementById('codea').style.color = "red"
       }
       else {
        return console.log("ok")
       }
}

function checkCard(input){
    if(!(creditNumber.test(input)) || input == null) {
        document.getElementById('carda').innerText = "Nem jo"
        document.getElementById('carda').style.color = "red"
       }
       else {
        return console.log("ok")
       }
}

function checkCVC(input){
    if(!(cvc.test(input)) || input == null) {
        document.getElementById('cvca').innerText = "Nem jo"
        document.getElementById('cvca').style.color = "red"
       }
       else {
        return console.log("ok")
       }
}

function checkCardname(input){
    if(!(cardName.test(input)) || input == null) {
        document.getElementById('cardnamea').innerText = "Nem jo"
        document.getElementById('cardnamea').style.color = "red"
       }
       else {
        return console.log("ok")
       }
}
