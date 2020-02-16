import React from "react";
import { Button } from "semantic-ui-react";
import "../../../styles/button.scss";
import {
  shiftCipherEncryptCalc,
  shiftCipherDecryptCalc
} from "../../../utils/ShiftCipherCalc";
import {
  vigenereCipherEncryptCalc,
  vigenereCipherDecryptCalc
} from "../../../utils/VigenereCipherCalc";
import {
  substitutionEncryptCipher,
  substitutionDecryptCipher
} from "../../../utils/substitutionCipher";
import {
  PlayFairCipherEncrypt,
  PlayFairCipherDecrypt
} from "../../../utils/playFairCipher";
const Buttons = ({
  error,
  onEncrypt,
  onReset,
  onDecrypt,
  cipherType,
  keyVal,
  plainText,
  cipherText
}) => {
  const CurrentEncryptCipher = () => {
    switch (cipherType) {
      case "vigenere cipher":
        onEncrypt(vigenereCipherEncryptCalc(plainText, keyVal));

        break;

      case "playFair cipher":
        onEncrypt(PlayFairCipherEncrypt(plainText, keyVal));
        break;
      case "substitution cipher":
        onEncrypt(substitutionEncryptCipher(plainText));
        break;

      default:
        onEncrypt(shiftCipherEncryptCalc(plainText, keyVal));
    }
  };
  const CurrentDecryptCipher = () => {
    switch (cipherType) {
      case "vigenere cipher":
        onDecrypt(vigenereCipherDecryptCalc(cipherText, keyVal));

        break;

      case "playFair cipher":

        onDecrypt(PlayFairCipherDecrypt(cipherText, keyVal));
        break;
      case "substitution cipher":
        onDecrypt(substitutionDecryptCipher(cipherText));
        break;

      default:
        onDecrypt(shiftCipherDecryptCalc(cipherText, keyVal));
        break;
    }
  };
  return (
    <div className="button-div">
      <Button
        onClick={CurrentEncryptCipher}
        disabled={error}
        style={{ margin: "50px" }}
        content="encrypt"
        primary
      />
      <Button
        onClick={CurrentDecryptCipher}
        disabled={error}
        style={{ margin: "50px" }}
        content="Decrypt"
        color="teal"
      />
      <Button onClick={onReset} style={{ margin: "50px" }} content="Reset" />
    </div>
  );
};

export default Buttons;
