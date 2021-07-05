import React from "react";

const InputActivity = ({ value, setValue }) => {
  return (
    <input
      data-testid="form-field"
      type="text"
      placeholder="Add an activity here"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputActivity;
