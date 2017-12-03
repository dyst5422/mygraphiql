import { ApolloClient, NetworkStatus } from 'react-apollo';
import { Observable } from 'react-apollo/node_modules/apollo-client/util/Observable';
export { NetworkStatus, Observable };
export declare const graphQLFetcher: (apolloClient: ApolloClient) => (graphQLParams: any) => Promise<{
    data: {};
    loading: boolean;
    networkStatus: NetworkStatus;
    stale: boolean;
}> | {
    subscribe: (observer: {
        error: (error: Error[]) => void;
        next: (result: any) => void;
    }) => Observable<any>;
};
