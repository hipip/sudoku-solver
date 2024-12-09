import UI from "./UI.js";

export default class Backtracking {
  static async solve(board) {
    const emptyCell = board.findEmptyCell();
    if (!emptyCell) return true;

    const [i, j] = emptyCell;

    for (let number = 1; number <= 9; number++) {
      if (board.isValid(i, j, number)) {
        UI.highlightCell(i, j);
        board.setCell(i, j, number);
        UI.setCell(i, j, number);
        await UI.sleep(100);

        if (await Backtracking.solve(board)) return true;

        UI.highlightCell(i, j);
        board.setCell(i, j, 0);
        UI.setCell(i, j, 0);
        await UI.sleep(100);
      }
    }

    return false;
  }
}
