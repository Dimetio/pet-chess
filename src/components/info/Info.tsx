import { Dispatch, SetStateAction } from "react";
import { Board } from "../../models/Board";
import { Player } from "../../models/Player";
import LostFigures from "../lost-figure/lost-figures";
import Timer from "../timer/Timer";

import styles from "./info.module.css";

interface InfoProps {
  isStart: boolean;
  setIsStart: Dispatch<SetStateAction<boolean>>;
  board: Board;
  restart: () => void;
  currentPlayer: Player | null;
}

export default function Info({
  isStart,
  setIsStart,
  board,
  restart,
  currentPlayer,
}: InfoProps) {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <LostFigures title={"белые фигуры"} figures={board.lostWhiteFigures} />

        <LostFigures title={"черные фигуры"} figures={board.lostBlackFigures} />
      </div>

      <Timer
        isStart={isStart}
        setIsStart={setIsStart}
        restart={restart}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}
