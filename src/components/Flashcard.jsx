import { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  const getRandomIndex = () => {
    let nextRandomIndex;
    do {
      nextRandomIndex = Math.floor(Math.random() * data.length);
    } while (nextRandomIndex === cardIndex);
    setCardIndex(nextRandomIndex);
    return nextRandomIndex;
  };

  const handleNextClick = () => {
    setIsFlipped(false);
    setCardIndex(getRandomIndex());
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="card-container">
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        {data[cardIndex].isImage ? (
          <div className={`card-front ${data[cardIndex].category}`}>
            <div className="category">{data[cardIndex].category}</div>
            <img src={data[cardIndex].question}></img>
          </div>
        ) : (
          <div className={`card-front ${data[cardIndex].category}`}>
            <div className="category">{data[cardIndex].category}</div>
            <div className="question">{data[cardIndex].question}</div>
          </div>
        )}

        <div className="card-back">
          {isFlipped ? data[cardIndex].answer : ""}
        </div>
      </div>
      <button onClick={handleNextClick}>⭢</button>
    </div>
  );
};

export default Flashcard;
