function create2DArray() {
  let array = new Array(5);

  for (let i = 0; i < 5; i++) {
    array[i] = new Array(5);
  }

  return array;
}

export const playFairCipher = key => {
  const noSpaceKey = key.toLowerCase().replace(/\s/g, "");
  const keyLength = noSpaceKey.length;
  let keyInit = 0;
  let alphabetInit = 97;
  let matrix = create2DArray();
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (keyInit < keyLength) {

        if (matrix.flat().includes(noSpaceKey[keyInit])||
        noSpaceKey[keyInit] === "j")  {keyInit++;--j}
        else matrix[i][j] = noSpaceKey[keyInit++];
      } else if (
        matrix.flat().includes(String.fromCharCode(alphabetInit)) ||
        String.fromCharCode(alphabetInit) === "j"
      ) {
        alphabetInit++;
        j--
        console.log(String.fromCharCode(alphabetInit));

      } else {
        console.log(String.fromCharCode(alphabetInit))
        matrix[i][j] = String.fromCharCode(alphabetInit++);
      }
    }
  }
  return matrix;
};

export default playFairCipher;
