import React from "react";
import { Input } from "semantic-ui-react";

import "../../styles/key.scss";

const keyVal = ({ type, keyVal, onInputChange, error }) => {
  return (
    <div className="input">
      {type ? (
        <Input
          value={keyVal}
          label="KEY"
          error={error}
          onChange={onInputChange}
          type="number"
          max="25"
          min="0"
        />
      ) : (
        <Input value={keyVal} label="KEY" error={error} onChange={onInputChange} />
      )}
    </div>
  );
};

export default keyVal;
