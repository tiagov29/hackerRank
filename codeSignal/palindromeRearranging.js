// Given a string, find out if
// its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

function solution(inputString) {
  let letters = [...inputString];
  let counter = {};
  letters.forEach((element) =>
    counter.hasOwnProperty(element)
      ? counter[element]++
      : (counter[element] = 1)
  );
  const values = Object.values(counter);
  let impares = values.filter((e) => e % 2 != 0);
  if (impares.length <= 1) {
    return true;
  }
  return false;
}

//alternative solution
function solution(inputString) {
  return (
    inputString
      .split("")
      .sort()
      .join("")
      .replace(/(\w)\1/g, "").length < 2
  );
}

//alternative solution
function solution(s) {
  var ss = s.split("").sort(),
    r = 0;
  while (ss.length) {
    var t = ss.shift();
    if (t === ss[0]) ss.shift();
    else r++;
  }
  return r < 2;
}
