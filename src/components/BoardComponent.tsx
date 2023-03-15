import React from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export default function BoardComponent({ board, setBoard }: BoardProps) {
  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <div key={index}>
          {row.map((cell) => (
              <CellComponent cell={cell} key={cell.id}/>
          ))}
        </div>
      ))}
    </div>
  );
}
