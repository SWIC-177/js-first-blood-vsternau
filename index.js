const name = "Victoria";
const age = 31;

function verifyAdulthood(name, age) {
  if (age >= 18) {
    return `Welcome, ${name}!`;
  }
  return `You are not old enough to enter, ${name}!`;
}

console.log(verifyAdulthood(name, age));
