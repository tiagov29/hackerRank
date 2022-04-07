// Let's define digit degree of some positive integer as the number of times we need to
// replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// solution(n) = 0;
// For n = 100, the output should be
// solution(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// solution(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1

function solution(n) {
  let count = 0;
  if (n <= 9) {
    return count;
  } else {
    while (true) {
      count++;
      n = n
        .toString()
        .split("")
        .reduce((a, e) => {
          return parseInt(a) + parseInt(e);
        });
      if (n <= 9) {
        break;
      }
    }
  }
  return count;
}

// alternative solution
function solution(n) {
  c = 0;
  while (n.toString().length > 1) {
    n = n
      .toString()
      .split("")
      .reduce((x, y) => Number(x) + Number(y));
    c++;
  }
  return c;
}
