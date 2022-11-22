import express from 'express'
import { default as ParseServer, ParseGraphQLServer } from 'parse-server'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express()

const parseServer = new ParseServer({
    databaseURI: process.env.MONGO_URI,
    cloud: './dist/index.js',
    appId: process.env.PARSE_SERVER_APP_ID,
    fileKey: 'junogo',
    masterKey: process.env.PARSE_SERVER_MASTER_KEY,
    restApiKey: process.env.PARSE_SERVER_API_KEY,
    accountLockout: {
      duration: 5,
      threshold: 3,
      unlockOnPasswordReset: true,
    },
    passwordPolicy: {
      doNotAllowUsername: true,
      maxPasswordHistory: 1,
    },
    allowClientClassCreation: false,
    readOnlyMasterKey: true,
    sessionLength: 60 * 60 * 24 * 7,
    directAccess: true,
    enforcePrivateUsers: true,
});

const parseGraphQLServer = new ParseGraphQLServer(
    parseServer,
    {
        graphQLPath: '/graphql',
        playgroundPath: '/playground'
    }
)

app.use('/parse', parseServer.app)

parseGraphQLServer.applyGraphQL(app)
parseGraphQLServer.applyPlayground(app)

const port = 1337;
app.listen(port, () => {
    console.log(`REST API running on http://localhost:${port}/parse`);
    console.log(`GraphQL API running on http://localhost:${port}/graphql`);
    console.log(`GraphQL Playground running on http://localhost:${port}/playground`);
});
