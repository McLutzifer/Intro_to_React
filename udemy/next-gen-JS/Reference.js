// primitve typ
const number = 1;
const num2 = number;    // copy

//reference types
const person = {
    name: 'Max'
};

const secondPerson = person;
person.name = 'Manu';

console.log(secondPerson);   //prints 'Manu' because copies pointer