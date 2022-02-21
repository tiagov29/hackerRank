// Given two cells on the standard chess board,
// determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// solution(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// solution(cell1, cell2) = false.

function solution(cell1, cell2) {
  let letters = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8 };
  let total1 = letters[cell1[0]] + parseInt(cell1[1]);
  let total2 = letters[cell2[0]] + parseInt(cell2[1]);
  return total1 % 2 === total2 % 2;
}

//alternative solution
//Get the color (0=black, 1=white) for a given cell
var color = (s) => (Buffer(s)[0] - s[1]) % 2;

var solution = (a, b) => color(a) == color(b);

//alternative solution
function solution(cell1, cell2) {
  return (
    (cell1.charCodeAt(0) +
      Number(cell1[1]) +
      cell2.charCodeAt(0) +
      Number(cell2[1])) %
      2 ==
    0
  );
}
