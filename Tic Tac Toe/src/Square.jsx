import React from "react";

const Square = ({ value, handleClick }) => {
  return <button onClick={handleClick}>{value ? value : ""}</button>;
};

export default Square;
