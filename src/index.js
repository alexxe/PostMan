const { GraphQLServer } = require('graphql-yoga');
const { mergeSchemas, makeExecutableSchema } = require('graphql-tools');
const db = require('./hasura-binding');
const resolvers = require('./resolvers');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./schema.graphql');
const passport = require('passport');
const auth = require('./auth');
const bodyParser = require('body-parser');

async function main() {
  const binding = await db();
  const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
  });
  const finalSchema = mergeSchemas({
    schemas: [binding.schema, schema]
  });

  const server = new GraphQLServer({
    schema: finalSchema,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: ({ request }) => ({
      user: request.user,
      db: binding
    })
  });
  server.express.use(bodyParser.json());
  server.express.use(passport.initialize());
  server.express.use('/auth', auth);

  server.express.use('/graphql', (req, res, next) => {
    passport.authenticate(
      'jwt',
      {
        session: false
      },
      (err, user, info) => {
        if (info) {
          console.log(info);
        }
        if (user) {
          req.user = user;
        }

        next();
      }
    )(req, res, next);
  });

  server.start(
    {
      cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
      },
      endpoint: '/graphql',
      playground: '/playground',
      formatError: error => {
        console.log(error);
        return error.message;
      }
    },
    opts => console.log(`Server is running on http://localhost:${opts.port}`)
  );
}

main();
