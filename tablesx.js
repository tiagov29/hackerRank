function main() {
    const n = parseInt(readLine().trim(), 10);
    let array = [1,2,3,4,5,6,7,8,9,10]
    for( let i of array){
        console.log(`${n} x ${i} = ${n * i}`)
    }
}