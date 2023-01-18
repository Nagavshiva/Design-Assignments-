import React, { useState } from "react";

const Square = ({ size, handleClick }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: "blue",
        border: "1px solid gray"
      }}
      onClick={handleClick}
    />
  );
};

const SquareBox = () => {
  const [boxes, setBoxes] = useState([{ size: 150, id: 1 }]);

 const handleClick = (id) => {
    const newBoxes = boxes.map((box) => { //map over the existing boxes array
      if (box.id === id) { //if the id of the current box matches the id passed in
        const newSize = box.size / 2; //divide the size of the current box by 2
        return [
          { size: newSize, id: `${id}-1` },
          { size: newSize, id: `${id}-2` },
          { size: newSize, id: `${id}-3` },
          { size: newSize, id: `${id}-4` }
        ];
      }
      return box;
    });
    setBoxes([].concat(...newBoxes)); //update the state with the new boxes
  };


  return (
    <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center",alignItems:"center",height:"100vh" }}>
      {boxes.map((box) => (
        <Square
          key={box.id}
          size={box.size}
          handleClick={() => handleClick(box.id)}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <SquareBox />
    </div>
  );
}

