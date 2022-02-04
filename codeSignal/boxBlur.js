// Last night you partied a little too hard.
// Now there's a black and white photo of you that's about to go viral! You can't
// let this ruin your reputation, so you want to apply the box blur algorithm to the photo
// to hide its content.

// The pixels in the input image are represented as integers.
// The algorithm distorts the input image in the following way: Every pixel x in the
// output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// Example

// For

// image = [[1, 1, 1],
//          [1, 7, 1],
//          [1, 1, 1]]
// the output should be solution(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square:
// (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1.
// The border pixels are cropped from the final result.

// For

// image = [[7, 4, 0, 1],
//          [5, 6, 2, 2],
//          [6, 10, 7, 8],
//          [1, 4, 2, 0]]
// the output should be

// solution(image) = [[5, 4],
//                   [4, 4]]
// There are four 3 × 3 squares in the input image,
// so there should be four integers in the blurred output. To get the first
// value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5.
// The other three integers are obtained the same way,
// then the surrounding integers are cropped from the final result.

function solution(image) {
  let returnBox = [];
  let x = 1;
  let y = 1;
  while (x + 1 <= image.length - 1) {
    let newRow = makeRow(image, x, y);
    returnBox.push(newRow);
    x++;
  }

  return returnBox;
  function makeRow(image, x, y) {
    let row = [];
    while (y + 1 <= image[0].length - 1) {
      let focus = constructFocus(image, x, y);
      let pixel = sumBlock(focus);
      row.push(pixel);

      y++;
    }
    return row;
  }

  function constructFocus(image, x, y) {
    let r1 = x - 1;
    let r2 = x;
    let r3 = x + 1;
    let c1 = y - 1;
    let c2 = y + 1;
    let c3 = y;

    let imageInternal = [];

    let innerOne = [];
    innerOne.push(image[r1][c1]);
    innerOne.push(image[r1][c2]);
    innerOne.push(image[r1][c3]);

    imageInternal.push(innerOne);
    let innerTwo = [];
    innerTwo.push(image[r2][c1]);
    innerTwo.push(image[r2][c2]);
    innerTwo.push(image[r2][c3]);

    imageInternal.push(innerTwo);

    let innerThree = [];
    innerThree.push(image[r3][c1]);
    innerThree.push(image[r3][c2]);
    innerThree.push(image[r3][c3]);

    imageInternal.push(innerThree);

    return imageInternal;
  }

  function sumBlock(frame) {
    let rowOne = frame[0].reduce((total, num) => total + num);
    let rowTwo = frame[1].reduce((total, num) => total + num);
    let rowThree = frame[2].reduce((total, num) => total + num);

    let sumVal = rowOne + rowTwo + rowThree;

    let numberOfPixels = 9;

    return Math.floor(sumVal / numberOfPixels);
  }
}

//alternative solution
solution = (I) => {
  //Slice off the border
  var B = I.slice(1, -1).map((e) => e.slice(1, -1));

  //Replace every element with the average
  // of its neighbors
  return B.map((row, i) =>
    row.map((elem, j) => {
      var sum = 0;
      for (var x = 0; x < 3; ++x)
        for (var y = 0; y < 3; ++y) sum += I[i + x][j + y];
      return (sum / 9) | 0;
    })
  );
};

//alternative solution
