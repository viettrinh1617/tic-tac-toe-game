import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          <Square squares={squares} squareId="0" handleClick={handleClick}/>
          <Square squares={squares} squareId="1" handleClick={handleClick}/>
          <Square squares={squares} squareId="2" handleClick={handleClick}/>
        </div>
        <div className="board-row">
          <Square squares={squares} squareId="3" handleClick={handleClick}/>
          <Square squares={squares} squareId="4" handleClick={handleClick}/>
          <Square squares={squares} squareId="5" handleClick={handleClick}/>
        </div>
        <div className="board-row">
          <Square squares={squares} squareId="6" handleClick={handleClick}/>
          <Square squares={squares} squareId="7" handleClick={handleClick}/>
          <Square squares={squares} squareId="8" handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}
