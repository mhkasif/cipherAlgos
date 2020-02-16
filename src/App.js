import React, { Component } from "react";

import "./App.scss";
import MainCard from "./Component/Card/MainCard";

export default class App extends Component {
  state = {
    cipherType: "",
    keyVal: '',
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
    const lastChar = value[value.length - 1];
    if (isNaN(lastChar) || ' ')
      this.setState({
        [name]: value,
        error: false
      });
    else {
      this.toggleVisibility();
    }
  };
  onReset = () => {
    this.setState({
      keyVal: undefined,
      plainText: "",
      cipherText: "",
      error: true
    });
  };
  onInputChange = e => {
    const { value } = e.target;
    const lastChar = value[value.length - 1];

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
    } else if (isNaN(lastChar)) {
      this.setState({
        keyVal: value,
        error: false
      });
    }else{
      this.toggleVisibility();

    }
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
