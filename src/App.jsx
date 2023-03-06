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
    </div>
  );
}

export default App;
