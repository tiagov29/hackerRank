'use strict'
const my_array = ["las palabras que quieras testear si son palindromos"]
for ( let i of my_array) {
    let reverse = (i) => {
        return [...i].reverse().join("")
    }
    if( i  == reverse(i)){
        console.log(i)
    }
    
}
