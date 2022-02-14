// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.

function solution(n) {
  let string = JSON.stringify(n);
  let number = string.split("").map((x) => (x % 2 == 0 ? true : false));
  return number.every((x) => x == true);
}

//alternative solution
function solution(n) {
  return !(n + "").match(/[13579]/);
}

//alternative solution
function solution(n) {
  return (n + "").split("").every((x) => x % 2 === 0);
}

// alternative solution
function solution(n) {
  while (n > 0) {
    if ((n % 10) % 2 == 1) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
}
