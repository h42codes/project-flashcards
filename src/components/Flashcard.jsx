import { useState } from "react";
import "./Flashcard.css";

const Test = ({ card, isFlipped, handleCardClick }) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        {card.isImage ? (
          <div className={`card-front ${card.category}`}>
            <div className="category">{card.category}</div>
            <img src={card.question}></img>
          </div>
        ) : (
          <div className={`card-front ${card.category}`}>
            <div className="category">{card.category}</div>
            <div className="question">{card.question}</div>
          </div>
        )}
        <div className="card-back">{isFlipped ? card.answer : ""}</div>
      </div>
    </div>
  );
};

export default Test;

// "id": 0,
// "question": "/quiz-image/remus_lupin.jpg",
// "answer": "Remus Lupin",
// "isImage": true,
// "category": "easy"
