// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray) {
  "use strict";
  let maxSize = Math.max(...inputArray.map((x) => x.length));
  return inputArray.filter((x) => x.length === maxSize);
}

// my solution
function solution(inputArray) {
  let sorted = inputArray.sort((a, b) => {
    if (a.length > b.length) return -1;
    else return 1;
  });
  let length = sorted[0].length;
  let filter = sorted.filter((e) => e.length == length);
  return filter;
}
