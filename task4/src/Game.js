import React, { useState, useEffect } from 'react';

const Game = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);


  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    const index = Math.floor(Math.random() * 9);
    const words = ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5'];
    const word = words[Math.floor(Math.random() * words.length)];
    setSelectedBoxIndex(index);
    setKeyword(word);
  }, [timeLeft]);


  const handleClick = (i) => {
    if (i === selectedBoxIndex) { //check if the selected box index matches the box that was clicked
      setScore(prevScore => prevScore + 5); //increment the score by 5
      setSelectedBoxIndex(-1); // reset the selected box index to -1
    } else {
      setScore(prevScore => prevScore - 2.5); //decrement the score by 2.5
    }
  };




  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    } else if (selectedBoxIndex !== -1) {
      setTimeout(() => {
        setSelectedBoxIndex(-1);
        setKeyword('');
      }, 1000);
    }
  }, [timeLeft, selectedBoxIndex]);



  const handlePlayAgain = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setSelectedBoxIndex(-1);
    setKeyword('');
  };

  return (
    <div>
      {gameOver ? (
        <div>
          <h2>Game Over!</h2>
          <p>Your final score is {score}</p>
          <button className='buttons' onClick={handlePlayAgain}>Play Again</button>
        </div>
      ) : (
        <div>
          <h2 className="timer">Time left: {timeLeft}</h2>
          <h2 className="timer">Score: {score}</h2>
          <div className="grid-container">
          {Array(9)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className={`grid-item ${i === selectedBoxIndex ? 'selected' : ''}`}
                  onClick={() => handleClick(i)}
                >
                  {i === selectedBoxIndex ? keyword : ''}
                </div>
              ))}

          </div>
        </div>
      )}
    </div>
  );
};

export default Game;

