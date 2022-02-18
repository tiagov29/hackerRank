// Given a string, your task is to replace each of its characters by the next
// one in the English alphabet; i.e. replace a with b,
// replace b with c, etc (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// solution(inputString) = "dsbaz".

function solution(inputString) {
  return inputString
    .split("")
    .map((element) => {
      if (element === "z") return "a";
      return String.fromCharCode(element.charCodeAt() + 1);
    })
    .join("");
}

//alternative solution
function solution(s) {
  var c = "abcdefghijklmnopqrstuvwxyza";
  return s.replace(/./g, (x) => c[c.indexOf(x) + 1]);
}
