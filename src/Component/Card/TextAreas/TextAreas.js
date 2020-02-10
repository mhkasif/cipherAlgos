import React from "react";
import { Form } from "semantic-ui-react";
import { TextArea } from "semantic-ui-react";
import "../../../styles/text-area-container.scss";
const TextAreas = ({ plainText, cipherText, onTextChange }) => {
  return (
    <Form style={{ margin: "0px", padding: "0px", height: "100%" }}>
      <div className="labels">
        <h3 style={{ marginTop: "40px", width: "40vw", textAlign: "center" }}>
          Plain Text
        </h3>
        <h3 style={{ marginTop: "40px", width: "40vw", textAlign: "center" }}>
          Cipher Text
        </h3>
      </div>
      <div className="text-area-container">
        <TextArea
          name="plainText"
          style={{ width: "45%", height: "150%" }}
          rows={8}
          placeholder="Write Plain Text Here"
          onChange={onTextChange}
          value={plainText}
        />
        <TextArea
          onChange={onTextChange}
          name="cipherText"
          value={cipherText}
          style={{ width: "45%", height: "150%" }}
          rows={8}
          placeholder="Cypher Text To Be Here"
        />
      </div>
    </Form>
  );
};

export default TextAreas;
