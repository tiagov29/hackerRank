// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// solution(inputString) = "123".

function solution(inputString) {
  for (var i = 0; i < inputString.length; i++) {
    if (!/\d/.test(inputString[i])) break;
  }
  return inputString.substring(0, i);
}

// alternative solution
function solution(inputString) {
  return inputString.match(/^\d*/)[0];
}
