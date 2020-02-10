import React from "react";

import { Dropdown } from "semantic-ui-react";
import { Ciphers } from "../../../Ciphers/Ciphers";
import "../../../styles/dropdown.scss";
const DropDown = ({ handleCipherTypeChange }) => (
  <div className="dropdown">
    <Dropdown
      onChange={(e, d) => handleCipherTypeChange(d.value)}
      style={{ width: "50%" }}
      placeholder="Select Cipher"
      selection
      options={Ciphers}
    />
  </div>
);

export default DropDown;
