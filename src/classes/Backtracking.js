export default class Backtracking {
  static solve(board) {
    const emptyCell = board.findEmptyCell();

    if (!emptyCell) return true;

    const [i, j] = emptyCell;

    for (let number = 1; number <= 9; number++) {
      if (board.isValid(i, j, number)) {
        board.setCell(i, j, number);

        if (Backtracking.solve(board)) {
          return true;
        }

        board.setCell(i, j, 0);
      }
    }

    return false;
  }
}
