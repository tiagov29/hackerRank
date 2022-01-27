// Call two people equally strong if their strongest arms are equally
// strong (the strongest arm can be both the right and the left),
// and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if
// you two are equally strong.

// Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  return (
    Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight)
  );
}
