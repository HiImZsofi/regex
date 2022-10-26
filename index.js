let username = /^[a-zA-Z]+/

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('submit').addEventListener('click', () => {
        var usernameInput = document.getElementById('name').value;
        checkUsername(usernameInput)
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