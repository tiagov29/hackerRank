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
    // Enter your code here
    console.log('I implemented: AdvancedArithmetic')
    let num = parseInt(inputLines[0])
    let sum = 0;
    for (let i = 1; i <= num; i++) {
         if (num % i == 0) sum += i;
    }
    console.log(sum)
    // let divisors = 
}