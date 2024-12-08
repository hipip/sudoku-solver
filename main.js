import Backtracking from "./src/classes/Backtracking.js";
import Board from "./src/classes/Board.js";
import BoardUi from "./src/components/BoardUi.js";
import Button from "./src/components/Button.js";
import Title from "./src/components/Title.js";

const board = new Board();

document.body.appendChild(Title("Sudoku Solver"));
document.body.appendChild(BoardUi());
document.body.appendChild(
  Button("Solve", () => {
    Backtracking.solve(board);
  })
);

export { board };
