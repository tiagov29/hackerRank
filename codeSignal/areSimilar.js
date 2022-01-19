// Two arrays are called similar if one can be obtained
// from another by swapping at most one pair of elements
// in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function solution(a, b) {
  if (a.toString() == b.toString()) {
    return true;
  }

  let aR = [];
  let bR = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      aR.push(a[i]);
      bR.push(b[i]);
    }
  }
  bR = bR.reverse();
  if (aR.length === 2 && aR.toString() == bR.toString()) {
    return true;
  }
  return false;
}

//alternative

function solution(a, b) {
  const ad = a.filter((v, i) => v != b[i]);
  const bd = b.filter((v, i) => v != a[i]);
  return (
    ad.length == 0 || (ad.length == 2 && ad.join("") == bd.reverse().join(""))
  );
}

//alternative

function solution(a, b) {
  var i = 0,
    length = a.length,
    diff = [];

  for (; i < length; i++) {
    // If corresponding elements in a and b are not equal, push their
    // position to diff array to be used later.
    if (a[i] !== b[i]) {
      diff.push(i);
    }
  }

  // If there are no differences then the arrays are similar.
  if (diff.length === 0) {
    return true;
  }

  // If there are 2 differences, check to see if you would be able to swap the
  // elements to make the arrays equal.
  if (diff.length === 2) {
    if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) {
      return true;
    }
  }

  // If previous conditionals didn't return true, the arrays must not be similar.
  return false;
}
