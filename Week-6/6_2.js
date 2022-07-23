// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let currDir = dirs[0];
  let minCol = 0;
  let maxCol = n - 1;
  let minRow = 1;
  let maxRow = m - 1;

  let position = [0, 0];
  let maxIterations = m * n;

  let els = [];

  for (let i = 0; i < maxIterations; i++) {
    const r = position[0];
    const c = position[1];

    els.push(matrix[r][c]);

    if (currDir == dirs[0] && c == maxCol) {
      maxCol = maxCol - 1;
      currDir = dirs[1];
    }
    if (currDir == dirs[1] && r == maxRow) {
      maxRow = maxRow - 1;
      currDir = dirs[2];
    }
    if (currDir == dirs[2] && c == minCol) {
      minCol = minCol + 1;
      currDir = dirs[3];
    }
    if (currDir == dirs[3] && r == minRow) {
      minRow = minRow + 1;
      currDir = dirs[0];
    }
    position = [r + currDir[0], c + currDir[1]];
  }

  return els;
};
