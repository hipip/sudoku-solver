import Backtracking from "./src/classes/Backtracking.js";
import Board from "./src/classes/Board.js";
import BoardUi from "./src/components/BoardUi.js";
import Button from "./src/components/Button.js";
import Title from "./src/components/Title.js";
import Popup from "./src/components/Popup.js";
import UI from "./src/classes/UI.js";

const board = new Board();
const BODY = document.body;

BODY.appendChild(Title("Sudoku Solver"));
BODY.appendChild(BoardUi());
BODY.appendChild(
  Button("Solve", async () => {
    if (board.validateBoard()) {
      const solved = await Backtracking.solve(board);

      if (solved) {
        BODY.appendChild(Popup("Algorithm finished successfully!", "green"));
      } else {
        BODY.appendChild(Popup("Could not solve the board.", "red"));
      }
    } else {
      BODY.appendChild(Popup("Le tableau n'a pas de solution", "red"));
    }
    UI.unhighlightAll();
  })
);

export { board };
