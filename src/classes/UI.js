export default class UI {
  static getCell(i, j) {
    return document.querySelector(`.cell[i="${i}"][j="${j}"]`);
  }

  static setCell(i, j, number) {
    UI.getCell(i, j).value = number;
  }

  static highlightCell(i, j) {
    document
      .querySelectorAll(".cell.highlighted")
      .forEach((c) => c.classList.remove("highlighted"));
    UI.getCell(i, j).classList.add("highlighted");
  }
}
