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
    let n = parseInt(readLine());
    let arr = [];
    let names;
    for ( let i = 0; i < n; i++){
        arr.push(readLine());
    let gmail = arr.filter((x) => x.includes("@gmail.com"));
    gmail.sort();
    names = gmail.map(x => x.slice(0, x.indexOf(' ')));
    }
    names.forEach( n => console.log(n))
}