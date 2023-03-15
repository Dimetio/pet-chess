import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Pawn } from "./figures/Paws";

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[x][y];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addBishops() {}

  private addKings() {}

  private addQueens() {}

  private addRooks() {}

  private addKnights() {}

  public addFigures() {
    this.addBishops();
    this.addKings();
    this.addPawns();
    this.addQueens();
    this.addRooks();
    this.addKnights();
  }
}
