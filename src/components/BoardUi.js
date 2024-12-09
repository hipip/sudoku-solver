import { board } from "../../main.js";

const Cell = (i, j) => {
  const cell = document.createElement("input");
  cell.className = "cell";
  cell.setAttribute("i", i);
  cell.setAttribute("j", j);
  cell.value = 0;

  cell.oninput = () => {
    if (
      isNaN(cell.value) ||
      cell.value < 0 ||
      cell.value > 9 ||
      cell.value === ""
    )
      cell.value = 0;
    else board.setCell(i, j, cell.value);
  };

  return cell;
};

const BoardUi = () => {
  const cont = document.createElement("div");
  cont.className = "board";

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      cont.appendChild(Cell(i, j));
    }
  }

  return cont;
};

export default BoardUi;
