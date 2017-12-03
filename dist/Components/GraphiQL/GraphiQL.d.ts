/// <reference types="react" />
import * as React from 'react';
import { ApolloClient } from 'react-apollo';
import './graphiql.style';
export declare type Props = {
    client: ApolloClient;
};
export declare class GraphiQL extends React.PureComponent<Props> {
    private _graphqlFetcher;
    render(): JSX.Element;
}
