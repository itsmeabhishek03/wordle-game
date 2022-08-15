import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    attempt,
    gameOver,
    correctword
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Word"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {correctword}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {attempt.attemptval} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;