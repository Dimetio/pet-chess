import { useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export default function BoardComponent({ board, setBoard }: BoardProps) {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <div key={index}>
          {row.map((cell) => (
            <CellComponent
              click={click}
              cell={cell}
              key={cell.id}
              selected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
