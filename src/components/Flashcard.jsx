import { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ data }) => {
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
        <div className="card-front">{data.question}</div>
        <div className="card-back">{data.answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;
