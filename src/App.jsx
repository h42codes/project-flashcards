import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import triviaData from "./data/triviaData.json";

function App() {
  // const [gameData, setGameData] = useState(triviaData);
  const [cardIndex, setCardIndex] = useState(0);
  const [dataFilter, setCardFilter] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const gameData = useMemo(() => {
    switch (dataFilter) {
      case "textOnly":
        return triviaData.filter((data) => !data.isImage);
      case "imageOnly":
        return triviaData.filter((data) => data.isImage);
      default:
        return triviaData;
    }
  }, [dataFilter]);

  useEffect(() => setIsFlipped(false), [cardIndex, dataFilter]);

  const getAll = useCallback(() => {
    setCardFilter(null);
    setCardIndex(0);
  }, []);

  const getTextOnly = useCallback(() => {
    setCardFilter("textOnly");
    setCardIndex(0);
  }, []);

  const getImageOnly = useCallback(() => {
    setCardFilter("imageOnly");
    setCardIndex(0);
  }, []);

  const getRandomIndex = () => {
    let nextRandomIndex;
    do {
      nextRandomIndex = Math.floor(Math.random() * gameData.length);
    } while (nextRandomIndex === cardIndex);
    setCardIndex(nextRandomIndex);
    return nextRandomIndex;
  };

  const handleNextClick = () => {
    let newIndex = cardIndex + 1;
    if (newIndex == gameData.length) {
      newIndex = 0;
    }
    setCardIndex((cardIndex + 1) % gameData.length);
  };

  const handlePrevClick = () => {
    let newIndex = cardIndex - 1;
    if (newIndex == -1) {
      newIndex = gameData.length - 1;
    }
    setCardIndex(newIndex);
  };

  const handleShuffleClick = () => {
    setCardIndex(getRandomIndex());
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <h1>⚡️ Harry Potter Trivia ⚡️</h1>
      <h3>How big of a Harry Potter fan are you? Test your knowledge!</h3>
      <p>Number of cards: {gameData.length}</p>
      <div className="button-container">
        <button onClick={getAll}>All</button>
        <button onClick={getTextOnly}>Text Only</button>
        <button onClick={getImageOnly}>Image Only</button>
      </div>
      {/* <button onClick={handleSwitch}>
        Switch to {gameData == triviaData ? "Image" : "Text"} Only Mode
      </button> */}
      {/* <p>Cards marked as pass</p> */}
      {/* <Flashcard data={gameData} /> */}
      <Flashcard
        card={gameData[cardIndex]}
        isFlipped={isFlipped}
        handleCardClick={handleCardClick}
      />
      <div className="button-container">
        <button onClick={handlePrevClick}>⭠</button>
        <button onClick={handleNextClick}>⭢</button>
        <button onClick={handleShuffleClick}>Shuffle</button>
      </div>

      {/* <footer>
        Photo by{" "}
        <a href="https://unsplash.com/@bitu2104?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Tuyen Vo
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/tS-jh0M6JoA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </footer> */}
    </div>
  );
}

export default App;
