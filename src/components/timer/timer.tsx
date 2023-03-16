import { useEffect, useRef, useState } from "react";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";
import blackKing from "../../assets/black-king.png";
import whiteKing from "../../assets/white-king.png";

import styles from "./timer.module.css";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}
const Timer = ({ currentPlayer, restart }: TimerProps) => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Старт");
  const [blackTime, setBlackTime] = useState<number>(300);
  const [whiteTime, setwhiteTime] = useState<number>(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    if (isStart) {
      setButtonText("Стоп");
      startTimer();
    } else {
      setButtonText("Старт");
      stopTimer();
    }
  }, [currentPlayer, isStart]);

  function stopTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
  }

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTimer() {
    setwhiteTime((prev) => prev - 1);
  }

  function handleStart() {
    setIsStart(true);
  }

  const handleRestart = () => {
    setBlackTime(300);
    setwhiteTime(300);
    setIsStart(false);
    restart();
  };

  return (
    <div className={styles.tablo}>
      <button
        className={styles.button}
        onClick={isStart ? handleRestart : handleStart}
      >
        {buttonText}
      </button>

      <div className={styles["player-timer"]}>
        <img
          className={
            currentPlayer?.color === Colors.BLACK ? styles["current-step"] : ""
          }
          src={blackKing}
          alt=""
        />{" "}
        : {blackTime}
      </div>
      <div className={styles["player-timer"]}>
        <img
          className={
            currentPlayer?.color === Colors.WHITE ? styles["current-step"] : ""
          }
          src={whiteKing}
          alt=""
        />{" "}
        : {whiteTime}
      </div>
    </div>
  );
};

export default Timer;
