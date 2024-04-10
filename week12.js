// spread operator
const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// Create a new object with the same properties as the original object.
const otherPerson = { ...person };

otherPerson.name = "Jane Doe";

console.log(`Person's name is: ${person.name}`);
console.log(`Other Person's name is: ${otherPerson.name}`);

// pass by reference
const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

const otherPerson = person;

otherPerson.name = "Jane Doe";

console.log(`Person's name is: ${person.name}`);
console.log(`Other Person's name is: ${otherPerson.name}`);

// pass by value
const younger1  13;
let younger2 = younger1;

function incrementAge(age) {
  return age + 1;
}

younger2 = incrementAge(younger2);

console.log(`Younger1: ${younger1}`);   
console.log(`Younger2: ${younger2}`);

// pass by copy
const name = "John Doe";
let otherName = name; 

console.log(`Name: ${name}`);
console.log(`Other Name: ${otherName}`);  

otherName = "Jane Doe";

console.log(`Name: ${name}`);
console.log(`Other Name: ${otherName}`);

otherName = 23;
console.log(`Name: ${name}`);
console.log(`Other Name: ${otherName}`);