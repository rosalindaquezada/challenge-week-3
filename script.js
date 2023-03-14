var generateBtn = document.querySelector("#generate");

function writePassword() {
  let passwordText = document.querySelector("#password");
  
  var passwordLength = 8 ;
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  
  passwordText.value = password(length, charType);

  function password(length, charType) {
    let charGen = {
      lowercase: 'abcdefghijklmnop',
      uppercase: 'ABCDEFGHIJKLMNOP',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };
    
    var charTypes = charType.toLowerCase().split(', ');
    charSet = "";
    for(var i=0; i < charTypes.length; i++) {
      charSet += charGen[charTypes[i]];
    }
    
    console.log(charSet);

    var retVal = "";
    
    for (var i = 0; i < length; i++) {
      retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return retVal;
  }

document.getElementById("#generate").value = password;
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

