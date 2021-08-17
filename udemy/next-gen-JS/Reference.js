// primitve typ
const number = 1;
const num2 = number;    // copy

//reference types
const person = {
    name: 'Max'
};

const secondPerson = person;


console.log(secondPerson);   //prints 'Manu' because copies pointer

// to really copy an object use spread operator
const thirdPerson = {
    ...person
};

person.name = 'Manu';

console.log(secondPerson)
console.log(thirdPerson)