export default class Board {
  constructor() {
    this.mat = Array.from({ length: 9 }, () => Array(9).fill(0));
  }

  setCell(i, j, number) {
    this.mat[i][j] = +number;
    console.log(this.toString());
  }

  findEmptyCell() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.mat[i][j] === 0) return [i, j];
      }
    }
    return null;
  }

  verifyLine(i) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      const val = this.mat[i][j];
      if (val !== 0 && seen.has(val)) return false;
      seen.add(val);
    }
    return true;
  }

  verifyColumn(j) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
      const val = this.mat[i][j];
      if (val !== 0 && seen.has(val)) return false;
      seen.add(val);
    }
    return true;
  }

  verifySquare(i, j) {
    const seen = new Set();

    const startRow = Math.floor(i / 3) * 3;
    const startCol = Math.floor(j / 3) * 3;

    for (let row = startRow; row < startRow + 3; row++) {
      for (let col = startCol; col < startCol + 3; col++) {
        const val = this.mat[row][col];
        if (val !== 0 && seen.has(val)) return false;
        seen.add(val);
      }
    }
    return true;
  }

  isValid(i, j, number) {
    this.mat[i][j] = number;
    const isValid =
      this.verifyLine(i) && this.verifyColumn(j) && this.verifySquare(i, j);
    this.mat[i][j] = 0;
    return isValid;
  }

  validateBoard() {
    for (let i = 0; i < 9; i++) {
      if (!this.verifyLine(i)) return false;
      if (!this.verifyColumn(i)) return false;
    }

    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        if (!this.verifySquare(i, j)) return false;
      }
    }

    return true;
  }

  toString() {
    return this.mat.map((row) => row.join(" ")).join("\n");
  }
}
