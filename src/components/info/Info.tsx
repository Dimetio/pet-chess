import { Board } from "../../models/Board";
import { Player } from "../../models/Player";
import LostFigures from "../lost-figure/lost-figures";
import Timer from "../timer/timer";

import styles from "./info.module.css";

interface InfoProps {
  board: Board;
  restart: () => void;
  currentPlayer: Player | null;
}

export default function Info({ board, restart, currentPlayer }: InfoProps) {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <LostFigures title={"белые фигуры"} figures={board.lostWhiteFigures} />

        <LostFigures title={"черные фигуры"} figures={board.lostBlackFigures} />
      </div>

      <Timer restart={restart} currentPlayer={currentPlayer} />
    </div>
  );
}
