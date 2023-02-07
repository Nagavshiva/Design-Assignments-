import React, { useState } from 'react';

const Box = ({ id, size, onSplit, x, y }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: 'blue',
        position: 'absolute',
        border:'1px solid black',
        left: x,
        top: y
      }}
      onClick={() => onSplit(id)}
    />
  );
};

const BoxSplit = () => {
  const [boxes, setBoxes] = useState([{ id: 1, size: 500, x: 0, y: 0 }]);

  const handleSplit = id => {
    const updatedBoxes = boxes.map(box => {
      if (box.id === id) {
        const newSize = box.size / 2;
        return [
          { id: id * 10 + 1, size: newSize, x: box.x, y: box.y },
          { id: id * 10 + 2, size: newSize, x: box.x + newSize, y: box.y },
          { id: id * 10 + 3, size: newSize, x: box.x, y: box.y + newSize },
          { id: id * 10 + 4, size: newSize, x: box.x + newSize, y: box.y + newSize }
        ];
      } else {
        return box;
      }
    });

    setBoxes([].concat(...updatedBoxes));
  };

  return (
    <div style={{ position: 'relative' }}>
      {boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          size={box.size}
          onSplit={handleSplit}
          x={box.x}
          y={box.y}
        />
      ))}
    </div>
  );
};

export default BoxSplit;