import React, { useContext } from "react";
import './TextBox.css';
import CalciContex from "../../context/CalciContex";

const TextBox = () => {
  const context = useContext(CalciContex);

  if (!context) {
    throw new Error("TextBox must be used within a CalciContex.Provider");
  }

  const {current,setCurrent } = context;

  return (
    <div>
      <div className="calculator-display input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          value={current}
          onChange={(event)=>{setCurrent(event.target.value)}}
          disabled
        />
      </div>
    </div>
  );
};

export default TextBox;
