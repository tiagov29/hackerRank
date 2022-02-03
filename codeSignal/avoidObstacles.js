// You are given an array of
// integers representing coordinates of obstacles situated
// on a straight line.

// Assume that you are jumping from the point with
// coordinate 0 to the right. You are allowed only
// to make jumps of the same length represented by
// some integer.

// Find the minimal length of the jump enough to
// avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.

function solution(inputArray) {
  let max = Math.max(...inputArray);
  console.log(max + 1);
  for (let i = 1; i < max; i++) {
    let divs = inputArray.some((x) => x % i == 0);
    if (!divs) return i;
  }
  return max + 1;
}

//alternative solution
function solution(arr) {
  for (var n = 1; ; n++) if (arr.every((x) => x % n)) return n;
}

//alternative solution
function solution(inputArray) {
  var jump = 2;
  while (inputArray.some((obstacle) => obstacle % jump == 0)) {
    jump++;
  }
  return jump;
}

//alternative solution

A = solution = (a, j) => (
  //increment j
  (j = -~j),
  //check for any elements not divisible by j
  //if we find one, try the next j
  //otherwise, we found the answer
  a.every((e) => e % j) ? j : A(a, j)
);
