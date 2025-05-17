//Generate Two Random passwords that is 15 characters long//
//Strecth Golas: Abilitty to set password length, Add "copy-on-click, toggle "symbols" and "numbers" on/off//

const alphabets = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];


let passwordOne = document.getElementById("password1");
let passwordTwo = document.getElementById("password2");
let generateButton = document.getElementById("generateBtn");
let includeNumber = document.getElementById("includeNumbers");
let includeSymbol = document.getElementById("includeSymbols");



generateButton.addEventListener("click", function () {
  let passwordLength = document.getElementById("length").value;
  let availableCharacters = alphabets.slice()
  let result1 = ""
  let result2 = ""

  if (includeNumber.checked && includeSymbol.checked) {
      availableCharacters = availableCharacters.concat(numbers,symbols);
    } else if (includeSymbol.checked) {
     availableCharacters = availableCharacters.concat(symbols);
    } else if (includeNumber.checked) {
     availableCharacters = availableCharacters.concat(numbers);
    }


  for (i = 0; (i < passwordLength); i++) {
    result1 += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
    result2 += availableCharacters[Math.floor(Math.random() * availableCharacters.length)]
  }
   passwordOne.value = result1
   passwordTwo.value = result2
});

passwordOne.addEventListener("click", function () {
  passwordOne.select();
  document.execCommand("copy");
});

passwordTwo.addEventListener("click", function () {
  passwordTwo.select();
  document.execCommand("copy");
});

