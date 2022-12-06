import React from "react";

function Square({squares, squareId, handleClick}) {
  return (
    <button className={"square"} onClick={()=> handleClick(squareId)} >
      {squares[squareId]}
    </button>
  );
}

export default Square;
