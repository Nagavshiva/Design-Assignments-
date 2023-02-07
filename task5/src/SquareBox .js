import React, { useState } from "react";

const Box = ({ size, split }) => {
  const [squares, setSquares] = useState([{ size, split: false }]);

  const handleClick = index => {
    if (squares[index].split) return;
    const newSquares = [...squares];
    const newSize = size / 2;
    newSquares[index] = { size: newSize, split: true };
    for (let i = 0; i < 4; i++) {
      newSquares.push({ size: newSize, split: false });
    }
    setSquares(newSquares);
  };

  return (
    <div>
      {squares.map((square, index) => (
        <div
          key={index}
          style={{
            width: square.size,
            height: square.size,
            display: "inline-block",
            backgroundColor: "lightblue",
            border: "1px solid black"
          }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Box;
