import React, { Component } from "react";

import "./App.scss";
import MainCard from "./Component/Card/MainCard";
import { playFairCipher } from "./utils/playFairCipher";

export default class App extends Component {
  state = {
    cipherType: "",
    keyVal: 0,
    plainText: "",
    cipherText: "",
    error: true,
    animation: "tada",
    duration: 500,
    visible: true
  };
  handleCipherTypeChange = cipherType => {
    this.setState({
      cipherType
    });
  };
  onTextChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      error:false

    });
  };
  onReset = () => {
    this.setState({
      keyVal: 0,
      plainText: "",
      cipherText: "",
      error: true
    });
  };
  onInputChange = e => {
    const { value } = e.target;
    if (this.state.cipherType === "shift cipher") {

      if (value < 26 && value >= 0) {
        this.setState({
          keyVal: value,
          error: false
        });
      } else {
        this.toggleVisibility();
        this.setState({
          error: true
        });
      }
    } else
      this.setState({
        keyVal: value,
        error: false
      });
  };
  onEncrypt = cipherText => {
    // const { text, keyVal } = this.state;
    this.setState({
      cipherText
    });
  };
  onDecrypt = plainText => {
    // const { keyVal, cipherValue } = this.state;
    this.setState({
      plainText
    });
  };
  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));
  render() {
    const {
      cipherType,
      keyVal,
      cipherText,
      plainText,
      animation,
      duration,
      visible
    } = this.state;

    return (
      <div className="app">
        <MainCard
          animation={animation}
          duration={duration}
          visible={visible}
          keyVal={keyVal}
          plainText={plainText}
          onInputChange={this.onInputChange}
          cipherType={cipherType}
          onTextChange={this.onTextChange}
          onReset={this.onReset}
          cipherText={cipherText}
          handleCipherTypeChange={this.handleCipherTypeChange}
          onEncrypt={this.onEncrypt}
          onDecrypt={this.onDecrypt}
        />
      </div>
    );
  }
}
