// In this challenge, we practice calculating quartiles. Check out the Tutorial tab
// for learning materials and an instructional video!

// Task
// Given an array, arr , of n integers, calculate the respective first quartile (Q1),
//  second quartile (Q2), and third quartile (Q3). It is guaranteed that Q1, Q2, and  Q3 are integers.

// Example
// arr = [9,5,7,1,3]
// The sorted array is [1,3,5,7,9] which has an odd number of elements.
// The lower half consists of [1,3], and its median is 1+3/2 = 2. The middle element is 5 and
// represents the second quartile. The upper half is [5,7] and its median is 5 +7 /2 = 8. Return [2, 5, 8].

// let arr = [3, 7, 8, 5, 12, 14, 21, 15, 18, 14];
let arr = [4, 17, 7, 14, 18, 12, 3, 16, 10, 4, 4, 12];
// let arr = [3, 7, 8, 5, 12, 14, 21, 13, 18];
console.log(arr.sort((a, b) => a - b));
function quartiles(arr) {
  // Write your code here
  let Q1;
  let Q2;
  let Q3;
  let upperPart;
  let lowerPart;
  let middlePart;
  let sorted = arr.sort((a, b) => a - b);
  if (sorted.length % 2 == 0) {
    lowerPart = sorted.slice(0, sorted.length / 2);
    upperPart = sorted.slice(sorted.length / 2);
    Q1 = lowerPart[Math.ceil(lowerPart.length / 2 - 1)];
    Q2 = Math.floor((lowerPart[lowerPart.length - 1] + upperPart[0]) / 2);
    Q3 = Math.ceil(
      (upperPart[Math.floor(upperPart.length / 2 - 1)] +
        upperPart[Math.floor(upperPart.length / 2)]) /
        2
    );
    console.log(Q1, Q2, Q3);
    console.log(upperPart);
    return [Q1, Q2, Q3];
  } else {
    upperPart = sorted.slice(sorted.length / 2 + 1);
    lowerPart = sorted.slice(0, sorted.length / 2);
    middlePart = Math.floor(sorted.length / 2);
    Q2 = sorted[middlePart];
    Q1 =
      (lowerPart[lowerPart.length / 2 - 1] + lowerPart[lowerPart.length / 2]) /
      2;
    Q3 =
      (upperPart[upperPart.length / 2 - 1] + upperPart[upperPart.length / 2]) /
      2;
    console.log(upperPart);
    console.log(Q1, Q2, Q3);

    return [Q1, Q2, Q3];
  }
}

quartiles(arr);
