import "./main.scss";
import { Card, Button } from "semantic-ui-react";

import ShiftCipher from "../ShiftCipher/ShiftCipher";

import React, { Component } from "react";
import VignereCipher from "../VigenereCipher/VignereCipher";

export default class Main extends Component {
  state = {
    shiftCipher: true
  };
  onSwitch = () => {
    console.log("clicked");
    this.setState(prevState => ({
      shiftCipher: !prevState.shiftCipher
    }));
  };

  render() {
    return (
      <div className="main-div">
        <Card style={{ width: "70vw" }} className="main">
          {this.state.shiftCipher ? <ShiftCipher /> : <VignereCipher />}
        <div className='button-div'>
        <Button style={{width:'30%',marginBottom:'10px'}} secondary onClick={this.onSwitch} content="Switch" />
        </div>
        </Card>
      </div>
    );
  }
}
