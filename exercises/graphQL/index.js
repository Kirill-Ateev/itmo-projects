import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://demo111221.kodaktor.ru/graphql',
    cache: new InMemoryCache()
  });

  client
  .query({
    'data': 'hello'
  })
  .then(result => console.log(result));