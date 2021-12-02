const a = [3,6,7,2]
let count = 0;

for (let i = 0; i < a.length -1; i++) {
//el -1 es porque al tomar un elemento para comparar del array el compara con los que quedan
    for( let j = 0; j < a.length -1; j++){
// el j y j+1 es para que compare la posicion con la que esta a su derecha
        if ( a[j] > a[j + 1]){
// se pone de esta manera para cambiar las posiciones
            let aux = a[j]
            a[j] = a[j +1]
            a[j+1] = aux
        }
    }
    return a;
}

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let totalNum = 0;
    for(let i = 0; i < a.length ; i ++){
        let numberOfSwaps = 0;
        for (let j = 0; j < a.length-1; j ++){
            if(a[j] > a[ j + 1]){
                let temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
                numberOfSwaps+= 1;
            }
        }
        totalNum += numberOfSwaps;
        if(numberOfSwaps == 0){
            break;
        }
    }
    console.log(`Array is sorted in ${totalNum} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)

}
  