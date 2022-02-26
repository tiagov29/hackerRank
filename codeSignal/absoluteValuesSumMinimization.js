// Given a sorted array of integers a, your task is to determine
// which element of a is closest to all other values of a. In other words,
// find the element x in a, which minimizes the following sum:

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

// Example

// For a = [2, 4, 7], the output should be solution(a) = 4.

// for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
// for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
// for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
// The lowest possible value is when x = 4, so the answer is 4.

function solution(a) {
  let compare = [];
  let times = 0;
  let acum = 0;
  let sum = a.map((el, index, arr) => {
    for (let i = 0; i < arr.length; i++) {
      acum += Math.abs(el - arr[i]);
      times++;
      if (times == arr.length) {
        compare.push(acum);
        acum = 0;
        times = 0;
      }
    }
  });
  let result = compare.reduce((ac, el) => (el < ac ? el : ac));
  let min = a.find((x) => a.indexOf(x) == compare.indexOf(result));
  return min;
}

//alternative solution
function solution(A) {
  return A[Math.ceil(A.length / 2) - 1];
}

//alternative solution
function solution(a) {
  return a[Math.floor((a.length - 1) / 2)];
}

//alternative solution
const solution = (a) => {
  let distances = a.map((e) =>
    a.reduce((acc, cur) => acc + Math.abs(cur - e), 0)
  );
  return a[distances.indexOf(Math.min(...distances))];
};
