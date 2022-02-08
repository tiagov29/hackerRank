// In the popular Minesweeper game you have a board
//  with some mines and those cells that don't
//  contain a mine have a number in it that indicates
//  the total number of mines in the neighboring cells.
//  Starting off with some arrangement of mines we want
//   to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]
function solution(matrix) {
  let height = matrix.length;
  let width = matrix[0].length;

  let outArray = Array.from(Array(height), () => new Array(width));

  let mines = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      mines = 0;

      if (i > 0) {
        if (matrix[i - 1][j - 1]) mines += 1;
        if (matrix[i - 1][j]) mines += 1;
        if (matrix[i - 1][j + 1]) mines += 1;
      }

      if (i < height - 1) {
        if (matrix[i + 1][j - 1]) mines += 1;
        if (matrix[i + 1][j]) mines += 1;
        if (matrix[i + 1][j + 1]) mines += 1;
      }

      if (matrix[i][j - 1]) mines += 1;
      if (matrix[i][j + 1]) mines += 1;

      outArray[i][j] = mines;
    }
  }
  return outArray;
}

//alternative solution

/**
 * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
 * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
 *
 * Aside from that, it's rather self-explanatory.
 */

const directions = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];

solution = (matrix) =>
  matrix.map((row, y) =>
    row.map((col, x) =>
      directions.reduce(
        (count, i) =>
          (count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]])),
        0
      )
    )
  );
