import { useState } from "react";
import "./App.css";
import { HangmanDrawing, HangmanWord, Keyboard } from "./Components";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetters, setguessLetters] = useState<string[]>([]);
  const incorrectLetters = guessLetters.filter(letter => !wordToGuess.includes(letter))

  // console.log(wordToGuess);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose/Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
