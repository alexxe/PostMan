const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');
const { Binding } = require('graphql-binding');
const {
  introspectSchema,
  makeRemoteExecutableSchema
} = require('graphql-tools');

const link = new HttpLink({
  uri: process.env.HASURA_ENDPOINT || 'http://localhost:8080/v1alpha1/graphql',
  fetch
});

module.exports = async () => {
  try {
    const schema = await introspectSchema(link);

    const executableSchema = makeRemoteExecutableSchema({
      schema,
      link
    });

    return new Binding({
      schema: executableSchema
    });
  } catch (err) {
    return {};
  }
};
