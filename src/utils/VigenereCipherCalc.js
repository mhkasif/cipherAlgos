const alphabetsArray = [];
for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  alphabetsArray.push(String.fromCharCode(i));
}
export const vigenereCipherEncryptCalc = (text, key) => {
  const keyArray = key.split("");
  const textArray = text.split("");
  let cipherTextArray = "";
  var j = 0;
  for (var i = 0; i < text.length; i++) {
    if (textArray[i] !== " ") {
      const newChar =
        (alphabetsArray.indexOf(textArray[i]) +
          alphabetsArray.indexOf(keyArray[j % keyArray.length])) %
        26;
      cipherTextArray += alphabetsArray[newChar];
      j++;
    } else {
      cipherTextArray += " ";
    }
  }
  console.log(cipherTextArray);

  return cipherTextArray;
};
export const vigenereCipherDecryptCalc = (text, key) => {
  const keyArray = key.split("");
  const textArray = text.split("");
  let cipherTextArray = "";
  var t = 0;

  for (var i = 0; i < text.length; i++) {
    if (textArray[i] === " ") {

        cipherTextArray += " ";

    }
    else if (
      alphabetsArray.indexOf(textArray[i]) -
        alphabetsArray.indexOf(keyArray[t % keyArray.length]) <
      0
    ) {
      const newChar =
        (alphabetsArray.indexOf(textArray[i]) -
          alphabetsArray.indexOf(keyArray[t % keyArray.length]) +
          26) %
        26;
      cipherTextArray += alphabetsArray[newChar];
      t++;
    } else if (textArray[i] !== " ") {
      const newChar =
        (alphabetsArray.indexOf(textArray[i]) -
          alphabetsArray.indexOf(keyArray[t % keyArray.length])) %
        26;
      cipherTextArray += alphabetsArray[newChar];
      t++;
    }
  }

  return cipherTextArray;
};
