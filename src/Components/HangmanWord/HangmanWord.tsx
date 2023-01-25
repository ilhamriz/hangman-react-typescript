import styles from "./HangmanWord.module.css";

const HangmanWord = () => {
  const word = "test";
  const guessed = ["t", 'e'];

  return (
    <div className={styles.wrapper}>
      {word.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid black" }}>
          <span style={{visibility: guessed.includes(letter) ? "visible" : "hidden"}}>{letter}</span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
