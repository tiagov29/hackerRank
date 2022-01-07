// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1, s2) {
  let string1 = s1.split("");
  let string2 = s2.split("");
  let count = 0;
  string1.forEach((e) => {
    if (string2.includes(e)) {
      count++;
      string2.splice(indexOf(e), 1);
    }
  });
  return count++;
}

//alternative solution
function solution(s1, s2) {
  for (var i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], "!");
  }
  return s2.replace(/[^!]/g, "").length;
}

//alternative 2
function solution(s1, s2) {
  var a = s1.split(""),
    r = 0;
  while (a.length) {
    var t = a.pop();
    if (s2.includes(t)) {
      r++;
      s2 = s2.replace(t, "");
    }
  }
  return r;
}
