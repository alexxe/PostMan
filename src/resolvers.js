const resolvers = {
  Query: {
    async test(parent, { args }, ctx) {
      return 'Hallo';
    }
  },

  Mutation: {}
};

module.exports = resolvers;
