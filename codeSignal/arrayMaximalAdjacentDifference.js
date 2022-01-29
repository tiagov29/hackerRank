// Given an array of integers, find the maximal absolute difference
// between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// solution(inputArray) = 3.

function solution(inputArray) {
  let maxDifference = 0;
  inputArray.map((el, index, arr) => {
    if (Math.abs(el - arr[index + 1]) > maxDifference) {
      maxDifference = Math.abs(el - arr[index + 1]);
      console.log(maxDifference);
    }
  });
  return maxDifference;
}

//alternative solution
function solution(arr) {
  return Math.max(...arr.slice(1).map((x, i) => Math.abs(x - arr[i])));
}

// alternative solution
function solution(inputArray) {
  let maxDiff = 0;

  for (let i = 1; i < inputArray.length; i++) {
    const currentDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

    if (maxDiff < currentDiff) {
      maxDiff = currentDiff;
    }
  }

  return maxDiff;
}
