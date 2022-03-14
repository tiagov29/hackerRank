// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8
function solution(inputArray, k) {
  let rollingSum = inputArray.slice(0, k).reduce((a, b) => a + b);
  let max = rollingSum;
  for (let i = 0; i < inputArray.length - k; i++) {
    rollingSum += inputArray[i + k] - inputArray[i];
    max = Math.max(max, rollingSum);
  }
  return max;
}

//alternative solution
function solution(inputArray, k) {
  s = m = inputArray.slice(0, k).reduce((x, y) => x + y);
  for (i = k; i < inputArray.length; i++) {
    s += inputArray[i] - inputArray[i - k];
    if (s > m) {
      m = s;
    }
  }
  return m;
}
