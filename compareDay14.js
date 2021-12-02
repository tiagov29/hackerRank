'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
   let ar = inputLines.slice(1);
   let num = ar[0].split(' ');
   let numbers = num.map( (s) => parseInt(s))
   let order = numbers.sort((a,b) => {
       return b - a ;
   })
   let compare = 0;
   let result;
   for(let i of order){
       result = order[0] - i;
       if(result > compare){
           compare = result;
       }
   }
    console.log(compare);
    // Enter your code here
}