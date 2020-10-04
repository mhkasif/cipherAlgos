function create2DArray() {
  let array = new Array(5);

  for (let i = 0; i < 5; i++) {
    array[i] = new Array(5);
  }

  return array;
}
let matrix = create2DArray();

export const playFairCipherMatrix = key => {
  const noSpaceKey = key.toLowerCase().replace(/\s/g, "");
  const keyLength = noSpaceKey.length;
  let keyInit = 0;
  let alphabetInit = 97;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (keyInit < keyLength) {
        if (
          matrix.flat().includes(noSpaceKey[keyInit]) ||
          noSpaceKey[keyInit] === "j"
        ) {
          keyInit++;
          --j;
        } else matrix[i][j] = noSpaceKey[keyInit++];
      } else if (
        matrix.flat().includes(String.fromCharCode(alphabetInit)) ||
        String.fromCharCode(alphabetInit) === "j"
      ) {
        alphabetInit++;
        j--;
      } else {
        matrix[i][j] = String.fromCharCode(alphabetInit++);
      }
    }
  }
};
export const PlayFairCipherEncrypt = (text, key) => {
  text = text.toLowerCase();
  text = text.replace(/[^\s a-z]/g, "");
  text = text.replace(/  +/g, " ");

  console.log(text);
  const spaceIndex = [];
  const specialChar = [];
  playFairCipherMatrix(key);
  let cipherText = "";
  text.split("").forEach((c, idx) => {
    if (c === " ") {
      spaceIndex.push(idx);
    } else if (c.match(/[^a-z]/g)) {
      specialChar.push([c, idx]);
    }
    // return specialChar
  });
  let textArrayWithNoSpace = text.replace(/\s/g, "");

  for (let i = 0; i < textArrayWithNoSpace.length - 1; i++) {
    if (textArrayWithNoSpace[i] === textArrayWithNoSpace[i + 1])
      textArrayWithNoSpace =
        textArrayWithNoSpace.slice(0, i + 1) +
        "x" +
        textArrayWithNoSpace.slice(i + 1);
  }

  if (textArrayWithNoSpace.length % 2 !== 0) {
    textArrayWithNoSpace += "x";
  }
  textArrayWithNoSpace = textArrayWithNoSpace.replace(/j/g, "i");
  let pairs = textArrayWithNoSpace.match(/.{1,2}/g);
  console.log(pairs.length);
  for (let pairsLoop = 0; pairsLoop < pairs.length; pairsLoop++) {
    let pair = pairs[pairsLoop];
    let pair0 = {
      row: 0,
      col: 0
    };
    let pair1 = {
      row: 0,
      col: 0
    };
    for (let pairLoop = 0; pairLoop < pair.length; pairLoop++) {
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          if (pair[pairLoop] === matrix[row][col]) {
            if (pairLoop === 0) {
              pair0.row = row;
              pair0.col = col;
            } else {
              pair1.row = row;
              pair1.col = col;
            }
          }
        }
      }
    }
    //if they are on diagnoal
    if (pair0.row !== pair1.row && pair0.col !== pair1.col) {
      //swap col
      let colTemp = pair0.col;
      pair0.col = pair1.col;
      pair1.col = colTemp;
    }
    //if they are on same row
    if (pair0.row === pair1.row) {
      pair0.col = (pair0.col + 1) % 5;
      pair1.col = (pair1.col + 1) % 5;
    }
    //if they are on same col
    if (pair0.col === pair1.col) {
      pair0.row = (pair0.row + 1) % 5;
      pair1.row = (pair1.row + 1) % 5;
    }
    cipherText += matrix[pair0.row][pair0.col];
    cipherText += matrix[pair1.row][pair1.col];
  }
  //place space in sentence as provided in original text
  for (let i = 0; i < spaceIndex.length; i++) {
    cipherText =
      cipherText.slice(0, spaceIndex[i]) +
      " " +
      cipherText.slice(spaceIndex[i]);
  }
  //place special char in sentence as provided in original text
  // console.log(specialChar);
  // for (let i = 0; i < specialChar.length; i++) {
  //   cipherText =
  //     cipherText.slice(0, specialChar[i][1]) +
  //     specialChar[i][0] +
  //     cipherText.slice(specialChar[i][1]);
  // }
  // if (cipherText % 2 !== 0) {
  //   cipherText = cipherText.slice(0, cipherText.length - 1).toString();
  // }

  return cipherText;
};
export const PlayFairCipherDecrypt = (text, key) => {
  text = text.toLowerCase();

  const spaceIndex = [];
  playFairCipherMatrix(key);
  let plainText = "";
  text.split("").map((c, idx) => {
    if (c === " ") {
      return spaceIndex.push(idx);
    } else if (c.match(/[^a-z]/g)) {
      return specialChar.push([c, idx]);
    }
    return spaceIndex;
  });

  let textArrayWithNoSpace = text.replace(/\s/g, "");

  let pairs = textArrayWithNoSpace.match(/.{1,2}/g);

  for (let pairsLoop = 0; pairsLoop < pairs.length; pairsLoop++) {
    let pair = pairs[pairsLoop];
    let pair0 = {
      row: 0,
      col: 0
    };
    let pair1 = {
      row: 0,
      col: 0
    };
    for (let pairLoop = 0; pairLoop < pair.length; pairLoop++) {
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
          if (pair[pairLoop] === matrix[row][col]) {
            if (pairLoop === 0) {
              pair0.row = row;
              pair0.col = col;
            } else {
              pair1.row = row;
              pair1.col = col;
            }
          }
        }
      }
    }
    //if they are on diagnoal
    if (pair0.row !== pair1.row && pair0.col !== pair1.col) {
      //swap col
      let colTemp = pair0.col;
      pair0.col = pair1.col;
      pair1.col = colTemp;
    }
    //if they are on same row
    if (pair0.row === pair1.row) {
      if ((pair0.col - 1) % 5 < 0 || (pair1.col - 1) % 5 < 0) {
        pair0.col = (pair0.col - 1 + 5) % 5;
        pair1.col = (pair1.col - 1 + 5) % 5;
      } else {
        pair0.col = Math.abs((pair0.col - 1) % 5);
        pair1.col = Math.abs((pair1.col - 1) % 5);
      }
    }
    //if they are on same col
    if (pair0.col === pair1.col) {
      if ((pair0.row - 1) % 5 < 0 || (pair1.row - 1) % 5 < 0) {
        pair0.row = (pair0.row - 1 + 5) % 5;
        pair1.row = (pair1.row - 1 + 5) % 5;
      } else {
        pair0.row = Math.abs((pair0.row - 1) % 5);
        pair1.row = Math.abs((pair1.row - 1) % 5);
      }
    }
    plainText += matrix[pair0.row][pair0.col];
    plainText += matrix[pair1.row][pair1.col];
  }

  const specialChar = [];

  //place special char in sentence as provided in original text
  // for (let i = 0; i < specialChar.length; i++) {
  //   plainText =
  //     plainText.slice(0, spaceIndex[i][1]) +
  //     specialChar[i][0] +
  //     plainText.slice(spaceIndex[i][1]);
  // }
  //showing all cipher except last aplhabet x
  //remove last x

  if (plainText.length % 2 === 0) {
    plainText = plainText.slice(0, plainText.length - 1).toString();
  }
  // remove x
  for (let i = 0; i < plainText.length - 2; i++) {
    if (plainText[i] === plainText[i + 2] && plainText[i + 1] === "x")
      plainText = plainText.slice(0, i + 1) + plainText.slice(i + 2);
  }

  // place space in sentence as provided in original text
  for (let i = 0; i < spaceIndex.length; i++) {
    plainText =
      plainText.slice(0, spaceIndex[i]) + " " + plainText.slice(spaceIndex[i]);
  }

  // if (textArrayWithNoSpace.length % 2 !== 0) {
  //   textArrayWithNoSpace += "x";
  // }
  plainText = plainText.replace(/i/g, "j");
  return plainText;
};
//joel enjoys programming at friday nights ! yay
// joel enjoys programming at friday nights ! yay
// questionauthority

// onsk nboncu qfyvcilzfho kh spfhro caomoq t cocv
