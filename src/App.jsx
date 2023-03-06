import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
  return (
    <div className="App">
      <h1>⚡️ Harry Potter Trivia ⚡️</h1>
      <h3>How big of a fan are you? Test your knowledge!</h3>
      <p>Number of cards: </p>
      <p>Cards marked as pass?</p>
      <Flashcard />
      <button>⭢</button>
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
