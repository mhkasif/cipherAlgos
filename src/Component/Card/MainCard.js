import React, { Component } from "react";
import { Icon, Transition } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import Nav from "./Nav/Nav";
import DropDown from "./DropDown/DropDown";
import TextAreas from "./TextAreas/TextAreas";
import "../../styles/main-card.scss";
import Buttons from "./Button/Buttons";
import Key from "../Key/Key";

export default class MainCard extends Component {


  render() {
    const { animation, duration, visible } = this.props;
    const {
      cipherType,
      cipherText,
      plainText,
      error,
      onReset,
      onTextChange,
      keyVal,
      onInputChange,
      handleCipherTypeChange,
      onEncrypt,
      onDecrypt
    } = this.props;

    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        <Card style={{ width: "70vw", height: "70vh" }}>
          <Nav />
          <DropDown handleCipherTypeChange={handleCipherTypeChange} />
          <Key
            type={cipherType === "shift cipher" ? "number" : ""}
            keyVal={keyVal}
            onInputChange={onInputChange}
          />
          <TextAreas
            onTextChange={onTextChange}
            cipherText={cipherText}
            plainText={plainText}
          />
          <Buttons
          plainText={plainText}
          cipherText={cipherText}
          keyVal={keyVal}
            onEncrypt={onEncrypt}
            onDecrypt={onDecrypt}
            cipherType={cipherType}
            error={error}
            onReset={onReset}
          />
        </Card>
      </Transition>
    );
  }
}
