// Find the leftmost digit that occurs in a given string.

// Example

// For inputString = "var_1__Int", the output should be
// solution(inputString) = '1';
// For inputString = "q2q-q", the output should be
// solution(inputString) = '2';
// For inputString = "0ss", the output should be
// solution(inputString) = '0'.

function solution(inputString) {
  let separate = inputString.split("");
  let number = separate.filter((x) => Number(x) || x == "0");
  return number[0];
}

//alternative solution
function solution(s) {
  return s.match(/\d/)[0];
}

//alternative solution
function solution(inputString) {
  return inputString[inputString.search(/\d/)];
}
