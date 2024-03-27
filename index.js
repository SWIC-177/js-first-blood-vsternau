const person = {
  userName: "John",
  userAge: 17,
};

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

const adultMessage = verifyAdulthood(person.userName, person.userAge);

console.log(adultMessage);
