import React from "react";
import { Button } from "semantic-ui-react";
import "../../../styles/button.scss";
import { shiftCipherEncryptCalc, shiftCipherDecryptCalc } from "../../../utils/ShiftCipherCalc";
import { vigenereCipherEncryptCalc, vigenereCipherDecryptCalc } from "../../../utils/VigenereCipherCalc";
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
        console.log("playfair cipher");
        break;
      case "substitution cipher":
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
        console.log("playfair cipher");
        break;
      case "substitution cipher":
        break;

      default:
        onDecrypt(shiftCipherDecryptCalc(cipherText, keyVal));
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
