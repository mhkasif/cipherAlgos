const alphabetsArray = [];
for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  alphabetsArray.push(String.fromCharCode(i));
}
export const shiftCipherEncryptCalc = (text, key) => {
  const textArray = text.split("");
  let cipherTextArray = "";
  for (var i = 0; i < text.length; i++) {
    if (textArray[i] !== " ") {
      const newChar = (alphabetsArray.indexOf(textArray[i]) + Number(key)) % 26;
      cipherTextArray += alphabetsArray[newChar];
    } else {
      cipherTextArray += " ";
    }
  }

  return cipherTextArray;
};
export const shiftCipherDecryptCalc = (text, key) => {

  const textArray = text.split("");
  let cipherTextArray = "";
  for (var i = 0; i < text.length; i++) {
    if (textArray[i] === " ") {
      cipherTextArray += " ";
    } else if (alphabetsArray.indexOf(textArray[i]) - Number(key) < 0) {
      const newChar =
        (alphabetsArray.indexOf(textArray[i]) - Number(key) + 26) % 26;
      cipherTextArray += alphabetsArray[newChar];
    } else if (textArray[i] !== " ") {
      const newChar = (alphabetsArray.indexOf(textArray[i]) - Number(key)) % 26;
      cipherTextArray += alphabetsArray[newChar];
    }
  }

  return cipherTextArray;
};
