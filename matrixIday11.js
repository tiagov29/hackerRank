// Objective
// Today, we are building on our knowledge of arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video.

// Context
// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

// Task
// Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// Example

// In the array shown above, the maximum hourglass sum is  for the hourglass in the top left corner.

// Input Format

// There are  lines of input, where each line contains  space-separated integers that describe the 2D Array .

// Constraints

// Output Format

// Print the maximum hourglass sum in .

const n = `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`


function main() {

    let arr = Array(6);
    // viene una matriz 6 x 6, para esto se crea un array de 6 espcios

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    // replace(/\s+$/g, '') es para remover los espacios del array
    // con el split los separa de manera unitaria y los pone entre comillas
    // con el map se crea un nuevo array con los numeros en base 10
    var sumarr = [];
    
    var h = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            sumarr[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1]
                    + arr[i+2][j+2];
            h++;
        }
    }

    // sumarr.sort();
    
    // var max = -99999;
    // for (var x = 0; x < 16; x++){
    //     if (sumarr[x] > max)
    //         max = sumarr[x];
    // }
    
    // console.log(max);
}
