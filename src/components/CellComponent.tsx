import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
}

export default function CellComponent({ cell }: CellProps) {
  return <div className={["cell", cell.color].join(" ")}></div>;
}
