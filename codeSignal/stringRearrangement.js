// Given an array of equal-length strings, you'd like to know if it's
// possible to rearrange the order of the elements in such a way that each consecutive
// pair of strings differ by exactly one character. Return true if it's possible,
// and false if not.

// Note: You're only rearranging the order of the strings,
// not the order of the letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// solution(inputArray) = false.

// There are 6 possible arrangements for these strings:

// ["aba", "bbb", "bab"]
// ["aba", "bab", "bbb"]
// ["bbb", "aba", "bab"]
// ["bbb", "bab", "aba"]
// ["bab", "bbb", "aba"]
// ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character,
// so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// solution(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive
// pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"),
// so return true.
function solution(inputArray) {
  let ret = false;
  let result = [];
  function bt() {
    for (let i = 0; i < inputArray.length; i++) {
      if (ret) break;
      result.push(inputArray.splice(i, 1)[0]);
      if (inputArray.length === 0) {
        ret = ret || checkResult();
      } else {
        bt();
      }
      inputArray.splice(i, 0, result.pop());
    }
  }
  function checkResult() {
    for (let i = 0; i < result.length - 1; i++) {
      let diff = 0;
      for (let j = 0; j < result[i].length; j++) {
        if (result[i][j] !== result[i + 1][j]) {
          diff++;
        }
      }
      if (diff !== 1) {
        return false;
      }
    }
    return true;
  }
  bt();
  return ret;
}

//alternative solution
function solution(a) {
  for (let i = 0; i < a.length; i++) {
    let remaining = findNext(a[i], a);
    if (remaining.length === 0) return true;
  }
  return false;
}

function findNext(current, a) {
  if (a.length === 0) return a;
  for (let i = 0; i < a.length; i++) {
    if (differsByOneChar(current, a[i])) {
      let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i + 1)));
      if (remaining.length === 0) return remaining;
    }
  }
  return a;
}

function differsByOneChar(s1, s2) {
  let mismatches = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) mismatches++;
    if (mismatches > 1) break;
  }
  return mismatches === 1;
}

//alternative solution
const solution = (inputArray) => {
  const foo = (d, inputArray) => {
    if (d === inputArray.length) {
      for (let i = 0; i < inputArray.length - 1; i++) {
        let c = 0;
        for (let j = 0; j < inputArray[i].length; j++) {
          if (inputArray[i][j] !== inputArray[i + 1][j]) c++;
        }
        if (c !== 1) return false;
      }
      return true;
    }
    for (let i = d; i < inputArray.length; i++) {
      [inputArray[d], inputArray[i]] = [inputArray[i], inputArray[d]];
      if (foo(d + 1, inputArray)) return true;
      [inputArray[d], inputArray[i]] = [inputArray[i], inputArray[d]];
    }
    return false;
  };
  return foo(0, inputArray);
};
