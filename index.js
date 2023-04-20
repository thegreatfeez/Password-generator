
const alphabetCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
const characterNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characterSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const passwordAmountNumber = document.getElementById("passwordAmountNumber");
const passwordAmountRange = document.getElementById("passwordAmountRange");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const passwordOneEl = document.getElementById("passwordOne-el");
const passwordTwoEl = document.getElementById("passwordTwo-el");

passwordAmountNumber.addEventListener("input", syncPasswordAmount);
passwordAmountRange.addEventListener("input", syncPasswordAmount);

function generatePassword(){
  const passwordAmount = passwordAmountNumber.value
  const numbers = includeNumbers.checked
  const symbols = includeSymbols.checked
  let passwordOne = getPassword(passwordAmount, numbers, symbols)
  let passwordTwo= getPassword(passwordAmount, numbers, symbols)
  passwordOneEl.textContent = passwordOne
  passwordTwoEl.textContent = passwordTwo
}

function getPassword(passwordAmount, numbers, symbols){
  let charCodes = alphabetCharacters
  if (numbers) charCodes = charCodes.concat(characterNumbers)
  if (symbols) charCodes = charCodes.concat(characterSymbols)

  const passwordCharacter = []
  for(i = 0; i < passwordAmount; i++){
    const characters = charCodes[Math.floor(Math.random()* charCodes.length)]
    passwordCharacter.push(characters)
  }
  return passwordCharacter.join("")
}

function syncPasswordAmount(e) {
  const value = e.target.value
  passwordAmountNumber.value = value
  passwordAmountRange.value = value
}
