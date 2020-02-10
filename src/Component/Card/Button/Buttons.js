import React from "react";
import { Button } from "semantic-ui-react";
import "../../../styles/button.scss";
import { shiftCipherEncryptCalc } from '../../../utils/ShiftCipherCalc';
const Buttons = ({ error, onEncrypt, reset, onDecrypt, cipherType,keyVal,plainText,cipherText }) => {
  const CurrentEncryptCipher = () => {
    switch (cipherType) {
      case "vigenere cipher":
        console.log("vigenere cipher");
        break;

      case "playFair cipher":
        console.log("playfair cipher");
        break;
      case "substitution cipher":
        console.log("substitution cipher");
        break;

      default:
const cipText=shiftCipherEncryptCalc(plainText,keyVal)
onEncrypt(cipText)
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
        onClick={onDecrypt}
        disabled={error}
        style={{ margin: "50px" }}
        content="Decrypt"
        color="teal"
      />
      <Button onClick={reset} style={{ margin: "50px" }} content="Reset" />
    </div>
  );
};

export default Buttons;
