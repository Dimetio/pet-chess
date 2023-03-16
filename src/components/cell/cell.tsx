import { Cell } from "../../models/Cell";
import styles from "./cell.module.css";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export default function CellComponent({ cell, selected, click }: CellProps) {
  return (
    <div
      className={`
        ${styles.cell} ${cell.color} 
        ${selected ? styles.selected : ""}
        ${cell.available && cell.figure ? styles["available-target"] : ""}
      `}
      onClick={() => click(cell)}
    >
      {cell.available && !cell.figure && (
        <div className={styles.available}></div>
      )}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
    </div>
  );
}
