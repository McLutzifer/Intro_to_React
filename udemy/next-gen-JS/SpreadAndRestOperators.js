// Spread
const oldArray = [1, 2, 3, 4, 5];
const newArray = [...oldArray, 6, 7];

console.log(newArray)

//object
const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age:28
}

console.log(newPerson)

// Rest
function sortArgs(...args) {
    return args.sort()
}

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3))