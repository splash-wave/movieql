export const people = [
  {
    id: 0,
    name: "Ashe",
    age: 32,
    gender: "female"
  },
  {
    id: 1,
    name: "John",
    age: 45,
    gender: "male"
  },
  {
    id: 2,
    name: "Todd",
    age: 24,
    gender: "male"
  },
  {
    id: 4,
    name: "Sam",
    age: 60,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
