import { useState } from "react";
import "./Guess.css";

const Guess = ({ userGuess, setUserGuess, isCorrect, checkAnswer }) => {
  // const [userGuess, setUserGuess] = useState("");
  // const [isCorrect, setIsCorrect] = useState(null);

  return (
    <div className="Guess">
      <span>Guess the answer</span>
      <input
        value={userGuess}
        type="text"
        placeholder="Place your answer here"
        onChange={(event) => setUserGuess(event.target.value)}
        className={
          isCorrect === true ? "correct" : isCorrect === false ? "wrong" : null
        }
      />
      <button type="submit" onClick={checkAnswer}>
        Submit
      </button>
    </div>
  );
};

export default Guess;
