const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = ""
let passwordTwo = ""
let passwordLenght = 15
let passwordOneEl = document.getElementById("passwordOne-el")
let passwordTwoEl = document.getElementById("passwordTwo-el")

function getRandomNumber(){
  let randomNumber = Math.floor(Math.random() * characters.length)
  return characters[randomNumber]
}

function getRandomPassword(){
  let randomPassword = ""
  for (i = 0; i < passwordLenght; i++){
    randomPassword += getRandomNumber()
  }
  return randomPassword
}

function generatePassword(){
  let passwordOne = getRandomPassword()
  let passwordTwo = getRandomPassword()
  passwordOneEl.textContent = passwordOne
  passwordTwoEl.textContent = passwordTwo
}