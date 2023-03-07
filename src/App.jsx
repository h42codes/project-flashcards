import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import triviaData from "./data/triviaData.json";
import imageTriviaData from "./data/imageTriviaData.json";
// import triviaData from "./data/triviaData.jsx";

function App() {
  const [gameData, setGameData] = useState(triviaData);
  const handleSwitch = () => {
    if (gameData == triviaData) {
      setGameData(imageTriviaData);
    } else {
      setGameData(triviaData);
    }
  };

  return (
    <div className="App">
      <h1>⚡️ Harry Potter Trivia ⚡️</h1>
      <h3>How big of a Harry Potter fan are you? Test your knowledge!</h3>
      <p>Number of cards: {gameData.length}</p>
      <button onClick={handleSwitch}>
        Switch to {gameData == triviaData ? "Image" : "Text"} Only Mode
      </button>
      {/* <p>Cards marked as pass</p> */}
      <Flashcard data={gameData} />

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
