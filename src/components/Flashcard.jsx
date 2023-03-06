import { useState } from "react";
import "./Flashcard.css";

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="card-front">QUESTION</div>
        <div className="card-back">ANSWER</div>
      </div>
    </div>
  );
};

export default Flashcard;
