import styles from "./HangmanWord.module.css";

type Props = {
  guessLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({ guessLetters, wordToGuess }: Props) => {
  return (
    <div className={styles.wrapper}>
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessLetters.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
