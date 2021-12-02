// You are given a variable, my_function. Your task is to assign it with an arrow function.
// The my_function should take an array as its parameter and return an array with all its even elements incremented by , and odd elements decremented by 1.

let my_function = (some_array) => some_array.map( (item) => item % 2 === 0? ++item: --item);