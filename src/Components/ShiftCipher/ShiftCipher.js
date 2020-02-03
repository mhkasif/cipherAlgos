import React, { Component } from "react";
import { TextArea, Input, Form } from "semantic-ui-react";
import "./ShiftCipher.scss";
import Buttons from "../Button/Buttons";
import {
  shiftCipherEncryptCalc,
  shiftCipherDecryptCalc
} from "../../utils/ShiftCipherCalc";

export default class ShiftCipher extends Component {
  state = {
    key: 0,
    text: "",
    cipherValue: "",
    error: false
  };
  onTextChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  onInputChange = e => {
    const { value } = e.target;
    console.log(value);
    if (value < 26 && value >= 0) {
      this.setState({
        key: value,
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };
  onReset = () => {
    this.setState({
      key: 0,
      text: "",
      cipherValue: "",
      error: false
    });
  };
  onEncrypt = () => {
    const { text, key } = this.state;
    this.setState({
      cipherValue: shiftCipherEncryptCalc(text.toLowerCase(), key)
    });
  };
  onDecrypt = () => {
    const { key, cipherValue } = this.state;
    this.setState({
      text: shiftCipherDecryptCalc(cipherValue.toLowerCase(), key)
    });
  };
  render() {
    return (
      <div>
        <div className="nav">
          <h1>SHIFT CIPHER</h1>
        </div>
        <div className="input">
          <Input
            value={this.state.key}
            label="KEY"
            error={this.state.error}
            onChange={this.onInputChange}
            type="number"
            max="25"
            min="0"
          />
        </div>
        <div className="labels">
          <h3 style={{ marginTop: "40px", width: "40vw", textAlign: "center" }}>
            Plain Text
          </h3>
          <h3 style={{ marginTop: "40px", width: "40vw", textAlign: "center" }}>
            Cipher Text
          </h3>
        </div>
        <Form className="sc">
          <TextArea
            name="text"
            style={{ width: "45%", height: "70%" }}
            rows={8}
            placeholder="Write Plain Text Here"
            onChange={this.onTextChange}
            value={this.state.text}
          />
          <TextArea
            onChange={this.onTextChange}
            name="cipherValue"
            value={this.state.cipherValue}
            style={{ width: "45%", height: "70%" }}
            rows={8}
            placeholder="Cypher Text To Be Here"
          />
        </Form>
        <Buttons
          reset={this.onReset}
          encrypt={this.onEncrypt}
          error={this.state.error}
          decrypt={this.onDecrypt}
        />
      </div>
    );
  }
}
