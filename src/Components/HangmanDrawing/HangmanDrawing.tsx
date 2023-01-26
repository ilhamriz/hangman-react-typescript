import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={styles.HEAD} />;

const BODY = <div className={styles.BODY} />;

const ARM_RIGHT = <div className={styles.ARM_RIGHT} />;

const ARM_LEFT = <div className={styles.ARM_LEFT} />;

const LEG_RIGHT = <div className={styles.LEG_RIGHT} />;

const LEG_LEFT = <div className={styles.LEG_LEFT} />;

const BODY_PARTS = [HEAD, BODY, ARM_RIGHT, ARM_LEFT, LEG_RIGHT, LEG_LEFT];

type Props = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: Props) => {
  return (
    <div className={styles.wrapper}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.hang} />
      <div className={styles.top} />
      <div className={styles.pole} />
      <div className={styles.bottom} />
    </div>
  );
};

export default HangmanDrawing;
