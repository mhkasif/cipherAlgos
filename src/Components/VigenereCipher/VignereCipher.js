import React, { Component } from "react";
import { TextArea, Input, Form } from "semantic-ui-react";
import "./VignereCipher.scss";
import Buttons from "../Button/Buttons";
import {
  vigenereCipherEncryptCalc,
  vigenereCipherDecryptCalc
} from "../../utils/VigenereCipherCalc";

export default class VignereCipher extends Component {
  state = {
    key: "",
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

    this.setState({
      key: value
    });
  };
  onReset = () => {
    this.setState({
      key: "",
      text: "",
      cipherValue: "",
      error: false
    });
  };
  onEncrypt = () => {
    const { text, key } = this.state;
    this.setState({
      cipherValue: vigenereCipherEncryptCalc(
        text.toLowerCase(),
        key.toLowerCase()
      )
    });
  };
  onDecrypt = () => {
    const { key, cipherValue } = this.state;
    this.setState({
      text: vigenereCipherDecryptCalc(
        cipherValue.toLowerCase(),
        key.toLowerCase()
      )
    });
  };
  render() {
    return (
      <div>
        <div className="nav">
          <h1>VIGENERE CIPHER</h1>
        </div>
        <div className="input">
          <Input
            value={this.state.key}
            label="KEY"
            error={this.state.error}
            onChange={this.onInputChange}
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
