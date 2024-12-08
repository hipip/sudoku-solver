import UI from "./UI.js";

export default class Backtracking {
  static async solve(board) {
    function sleep(s) {
      return new Promise((resolve) => setTimeout(resolve, s * 1000));
    }

    async function solveHelper() {
      const emptyCell = board.findEmptyCell();
      if (!emptyCell) return true;

      const [i, j] = emptyCell;

      for (let number = 1; number <= 9; number++) {
        if (board.isValid(i, j, number)) {
          UI.highlightCell(i, j);
          board.setCell(i, j, number);
          UI.setCell(i, j, number);
          await sleep(0.2);

          if (await solveHelper()) return true;

          UI.highlightCell(i, j);
          board.setCell(i, j, 0);
          UI.setCell(i, j, 0);
          await sleep(0.2);
        }
      }

      return false;
    }

    return await solveHelper();
  }
}
