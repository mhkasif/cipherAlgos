export const randomArray = [];
export const Alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const randomKey = () => {
  while (randomArray.length < 26) {
    let char = Math.floor(Math.random() * Alphabets.length);
    if (!randomArray.includes(Alphabets[char]))
      randomArray.push(Alphabets[char]);
  }
};

randomKey();
export const substitutionEncryptCipher = text => {
  const textArray = text.split("");
  return textArray.reduce((accumulator, textChar) => {
    const val = Alphabets.indexOf(textChar);
    const char = randomArray[val] || " ";
    return accumulator + char;
  }, "");
};
export const substitutionDecryptCipher = text => {
  const textArray = text.split("");
  return textArray.reduce((accumulator, textChar) => {
    const val = randomArray.indexOf(textChar);
    const char = Alphabets[val] || " ";
    return accumulator + char;
  }, "");
};
