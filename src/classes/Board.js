export default class Board {
  constructor() {
    this.mat = Array.from({ length: 9 }, () => Array(9).fill(0));
  }

  setCell(i, j, number) {
    this.mat[i][j] = number;
  }

  verifyLine(i) {
    const seen = new Set();
    for (let j = 0; j < 9; j++) {
      const value = this.mat[i][j];
      if (value !== 0) {
        if (seen.has(value)) return false;
        seen.add(value);
      }
    }
    return true;
  }

  verifyColumn(j) {
    const seen = new Set();
    for (let i = 0; i < 9; i++) {
      const value = this.mat[i][j];
      if (value !== 0) {
        if (seen.has(value)) return false;
        seen.add(value);
      }
    }
    return true;
  }

  verifySquare(i, j) {
    const seen = new Set();
    const startRow = Math.floor(i / 3) * 3;
    const startCol = Math.floor(j / 3) * 3;
    for (let row = startRow; row < startRow + 3; row++) {
      for (let col = startCol; col < startCol + 3; col++) {
        const value = this.mat[row][col];
        if (value !== 0) {
          if (seen.has(value)) return false;
          seen.add(value);
        }
      }
    }
    return true;
  }

  isValid(i, j, number) {
    this.setCell(i, j, number);
    const isValid =
      this.verifyLine(i) && this.verifyColumn(j) && this.verifySquare(i, j);
    this.mat[i][j] = 0;
    return isValid;
  }

  findEmptyCell() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.mat[i][j] === 0) return [i, j];
      }
    }
    return null;
  }

  toString() {
    return this.mat.map((row) => row.join(" ")).join("\n");
  }
}
