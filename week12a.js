const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

function renameOdds(p, newName) {
  const p2Update = { ...p };
  p2Update.name = newName;

  for (let i = 0; i < p.length; i += 1) {
    if (p[i].id % 2 !== 0) {
      const updatedPerson = { ...p[i] };
      updatedPerson.name = "Odd Name";
      p2Update[i] = updatedPerson;
    }
  }

  return p2Update;
}

console.log(renameOdds(people));
