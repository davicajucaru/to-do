import React from "react";

const ButtonAdd = ({ value }) => {
  return (
    <button type="submit" disabled={!value}>
      Add
    </button>
  );
};

export default ButtonAdd;
