// Given array of integers, remove each kth
// element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// and k = 3, the output should be
// solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
function solution(inputArray, k) {
  let selected = [];
  let even = inputArray.map((el, index, arr) => {
    if ((index + 1) % k !== 0) {
      selected.push(el);
    }
  });
  return selected;
}

//alternative solution
function solution(arr, k) {
  return arr.filter((_, i) => (i + 1) % k);
}

//alternative solution
const solution = (inputArray, k) => inputArray.filter((_, idx) => ++idx % k);
