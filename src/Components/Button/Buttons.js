import React from "react";
import { Button } from "semantic-ui-react";
import "./button.scss";
const Buttons = ({ error, encrypt, reset, decrypt }) => {
  return (
    <div className="button-div">
      <Button
        onClick={encrypt}
        disabled={error}
        style={{ margin: "50px" }}
        content="encrypt"
        primary
      />
      <Button
        onClick={decrypt}
        disabled={error}
        style={{ margin: "50px" }}
        content="Decrypt"
        color='teal'
      />
      <Button onClick={reset} style={{ margin: "50px" }} content="Reset" />
    </div>
  );
};

export default Buttons;
