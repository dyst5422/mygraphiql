import { parse } from 'graphql';
import gql from 'graphql-tag';
import { ApolloClient, NetworkStatus } from 'react-apollo';
import { Observable } from 'react-apollo/node_modules/apollo-client/util/Observable';
export {
  NetworkStatus,
  Observable,
};

const hasSubscriptionOperation = (graphQlParams: any) => {
  const queryDoc = parse(graphQlParams.query);

  for (const definition of queryDoc.definitions) {
    if (definition.kind === 'OperationDefinition') {
      const operation = definition.operation;
      if (operation === 'subscription') {
        return true;
      }
    }
  }

  return false;
};

export const graphQLFetcher = (apolloClient: ApolloClient) => {
  return (graphQLParams: any) => {

    if (hasSubscriptionOperation(graphQLParams)) {
      return {
        subscribe: (observer: { error: (error: Error[]) => void, next: (result: any) => void }) => {
          observer.next('Your subscription data will appear here after server publication!');

          return apolloClient.subscribe({
            query: gql(graphQLParams.query),
            variables: graphQLParams.variables,
          });
        },
      };
    } else {
      return apolloClient.query({ ...graphQLParams, query: gql(graphQLParams.query)});
    }
  };
};
