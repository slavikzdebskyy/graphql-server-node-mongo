const app = require('./app');
const { PORT } = require('./constans');

const currPort = process.env.PORT || PORT;

app.listen(PORT, () => {
  const potName = process.env.PORT ? process.env.PORT : `localhost:${currPort}`;
  console.log(`Running a GraphQL API server at ${potName}/graphql`);
});