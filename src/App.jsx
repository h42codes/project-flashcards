import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import Guess from "./components/Guess";
import triviaData from "./data/triviaData.json";

function App() {
  // const [gameData, setGameData] = useState(triviaData);
  const [cardIndex, setCardIndex] = useState(0);
  const [dataFilter, setCardFilter] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  // const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [currentStreakIds, setCurrentStreakIds] = useState(new Set());

  const gameData = useMemo(() => {
    switch (dataFilter) {
      case "textOnly":
        return triviaData.filter((data) => !data.isImage);
      case "imageOnly":
        return triviaData.filter((data) => data.isImage);
      case "shuffled":
        return shuffleArray(triviaData);
      default:
        return triviaData;
    }
  }, [dataFilter]);

  useEffect(() => {
    setIsFlipped(false);
    setUserGuess("");
    setIsCorrect(null);
  }, [cardIndex, dataFilter]);

  // useEffect(() => {
  //   setCardIndex(0);
  // }, [dataFilter]);

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

  const getShuffled = useCallback(() => {
    setCardFilter("shuffled");
    setCardIndex(0);
  }, []);

  function shuffleArray(array) {
    const shuffled_array = array.slice();
    for (let i = shuffled_array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled_array[i], shuffled_array[j]] = [
        shuffled_array[j],
        shuffled_array[i],
      ];
    }
    return shuffled_array;
  }

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

  const checkAnswer = () => {
    if (
      userGuess.toLowerCase().replace(/\s/g, "") ===
      gameData[cardIndex].answer.toLowerCase().replace(/\s/g, "")
    ) {
      setIsCorrect(true);
      setCurrentStreakIds((currentStreakIds) => {
        currentStreakIds.add(gameData[cardIndex].id);
        return currentStreakIds;
      });
      if (currentStreakIds.size + 1 > longestStreak) {
        setLongestStreak(currentStreakIds.size + 1);
      }
    } else {
      setIsCorrect(false);
      setCurrentStreakIds(new Set());
    }
  };

  return (
    <div className="App">
      <h1>⚡️ Harry Potter Trivia ⚡️</h1>
      <h3>How big of a Harry Potter fan are you? Test your knowledge!</h3>
      <p>Number of cards: {gameData.length}</p>
      <p>
        Current Streak: {currentStreakIds ? currentStreakIds.size : 0} Longest
        Streak: {longestStreak}
      </p>
      <div className="button-container">
        <button onClick={getAll}>All</button>
        <button onClick={getTextOnly}>Text Only</button>
        <button onClick={getImageOnly}>Image Only</button>
        <button onClick={getShuffled}>Shuffle</button>
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
      <Guess
        userGuess={userGuess}
        setUserGuess={setUserGuess}
        isCorrect={isCorrect}
        checkAnswer={checkAnswer}
      />
      <div className="button-container">
        <div className="top-container">
          <button onClick={handlePrevClick}>⭠</button>
          <button onClick={handleNextClick}>⭢</button>
        </div>
        <div className="bottom-container">
          <button onClick={handleShuffleClick}>Get Random Card</button>
        </div>
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
