import { useEffect, useState } from "react";
import "./App.css";
import { HangmanDrawing, HangmanWord, Keyboard } from "./Components";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessLetters, setGuessLetters] = useState<string[]>([]);
  const incorrectLetters = guessLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessLetters = (letter: string) => {
    if (guessLetters.includes(letter)) return;

    setGuessLetters((currentLetters) => [...currentLetters, letter]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/g)) return;

      e.preventDefault();
      addGuessLetters(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <HangmanWord guessLetters={guessLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
