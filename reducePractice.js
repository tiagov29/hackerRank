const people = [
    { id:"1", name: "james", age:31},
    { id:"2", name: "falcao", age:35},
    { id:"3", name: "cuadrado", age:36},
]

let numberPeople = people.reduce((acc,person) => acc + 1, 0);

// console.log(numberPeople)

let totalAges = people.reduce((acc, person) => acc + person.age, 0)


// console.log(totalAges)
let names = people.reduce((acc, person) => [...acc, person.name], [])
// ... se usan para generar una copia de todo lo que tenga la variable en este caso acc

// console.log(names)

let findById = people.reduce((acc, person)=> {
    return { ...acc, [person.id]: person};
}, {});


console.log(findById)