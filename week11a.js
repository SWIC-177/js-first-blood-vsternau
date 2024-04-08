function add2Nums1(x, y) {
  return x + y;
}
const add2Nums2 = (num1, num2) => num1 + num2;


// 2nd video

function bye(name) {
  return `Goodbye, ${name}!`;
}

function processPerson(name, func) {
  return func(name);
}

console.log(processPerson("Tori", bye));


// 3rd video

const person = 
name: "Jane Doe",
age: 12,
isChild: true,
};

function createGreeting(individual) {
    return (salutation) => `${saluatation}, ${individual.name}!`;
}

const greetJane = createGreeting(person);   
console.log(greetJane("Hello"));