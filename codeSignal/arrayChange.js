// You are given an array of integers. On each move you are allowed to increase
// exactly one of its element by one. Find the minimal number of
// moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.

function solution(inputArray) {
  let times = 0;
  inputArray.reduce((a, b) => {
    if (a >= b) {
      const diff = a + 1 - b;
      times += diff;
      return a + 1;
    }
    return b;
  });
  return times;
}

//alternative solution
function solution(series) {
  var moves = 0;

  for (var i = 1; i < series.length; i++) {
    if (series[i] <= series[i - 1]) {
      diff = series[i - 1] - series[i] + 1;
      series[i] += diff;
      moves += diff;
    }
  }

  return moves;
}

//alternative solution
function solution(inputArray) {
  return inputArray.reduce(function (x, b, i, a) {
    while (b >= a[i + 1]) {
      x++;
      a[i + 1]++;
    }
    return x;
  }, 0);
}
