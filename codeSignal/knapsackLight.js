// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

// Example

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 10.

// You can only carry the first item.

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 16.

// You're strong enough to take both of the items with you.

// For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 7.
// You can't take both items, but you can take any of them.

function solution(value1, weight1, value2, weight2, maxW) {
  let cont = 0;
  if (maxW >= weight1 || maxW >= weight2) {
    let maxV = Math.max(value1, value2);
    if (maxV == value1 && maxW >= weight1) {
      cont = value1;
      if (maxW - weight1 >= weight2) {
        cont += value2;
        return cont;
      } else {
        return cont;
      }
    } else if (maxW >= weight2) {
      return value2;
    } else {
      return value1;
    }
  } else {
    return cont;
  }
}

//alternative solution
function solution(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  );
}

//alternative solution
function solution(v1, w1, v2, w2, maxW) {
  return Math.max(
    v1 * (w1 <= maxW),
    v2 * (w2 <= maxW),
    (v1 + v2) * (w1 + w2 <= maxW)
  );
}
