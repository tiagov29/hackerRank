// Consider integer numbers from 0 to n - 1 written down along the
//  circle in such a way that the distance between any two neighboring
//  numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in
// the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.

function solution(n, firstNumber) {
  let middle = n / 2;
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  let firstC = array.slice(0, middle);
  let secondC = array.slice(middle);
  let firstIndex = firstC.indexOf(firstNumber);
  if (firstIndex == -1) {
    let secondIndex = secondC.indexOf(firstNumber);
    console.log(secondIndex);
    let res = firstC.find((x) => firstC.indexOf(x) == secondIndex);
    //    console.log("firstC : ", firstC, "secondC : ", secondC)
    return res;
  } else {
    let res = secondC.find((x) => secondC.indexOf(x) == firstIndex);
    console.log("firstC : ", firstC, "secondC : ", secondC);
    return res;
  }
}

//alternative solution
function solution(n, firstNumber) {
  return (n / 2 + firstNumber) % n;
}

//alternative solution
