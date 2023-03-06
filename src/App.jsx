import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import triviaData from "./data/triviaData.json";
// import triviaData from "./data/triviaData.jsx";

function App() {
  // refactor it because getting a random index rerenders the entire component
  const [cardIndex, setCardIndex] = useState(0);

  const getRandomIndex = () => {
    let nextRandomIndex;
    do {
      nextRandomIndex = Math.floor(Math.random() * triviaData.length);
    } while (nextRandomIndex === cardIndex);
    setCardIndex(nextRandomIndex);
    return nextRandomIndex;
  };

  const handleNextClick = () => {
    setCardIndex(getRandomIndex());
  };

  return (
    <div className="App">
      <h1>⚡️ Harry Potter Trivia ⚡️</h1>
      <h3>How big of a fan are you? Test your knowledge!</h3>
      <p>Number of cards: {triviaData.length}</p>
      {/* <p>Cards marked as pass</p> */}
      <Flashcard data={triviaData[cardIndex]} />
      <button onClick={handleNextClick}>⭢</button>
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
