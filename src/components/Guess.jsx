import { useState } from "react";
import "./Guess.css";

const Guess = ({ answer }) => {
  const [userGuess, setUserGuess] = useState("");
  return (
    <div className="Guess">
      <span>Guess the answer</span>
      <input
        value={userGuess}
        type="text"
        placeholder="Place your answer here"
        onChange={(event) => setUserGuess(event.target.value)}
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Guess;
