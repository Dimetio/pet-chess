import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export default function CellComponent({ cell, selected, click }: CellProps) {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
    >
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
}
