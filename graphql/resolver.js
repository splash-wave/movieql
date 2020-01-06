const ashe = {
  name: 'Ashe',
  age: 32,
  gender: 'female'
};

const resolvers = {
  Query: {
    person: () => ashe
  }
};

export default resolvers;
