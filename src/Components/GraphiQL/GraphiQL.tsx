// tslint:disable-next-line:no-require-imports
import GraphiQLComponent = require('graphiql');
// tslint:disable-next-line:no-require-imports
import localStorage = require('localStorage');
import * as React from 'react';
import { ApolloClient } from 'react-apollo';
import { graphQLFetcher } from './graphQLFetcher';
// tslint:disable-next-line:no-import-side-effect
import './graphiql.style';

export type Props = {
  client: ApolloClient;
};

// tslint:disable-next-line:no-var-requires no-require-imports
const storage = typeof window !== 'undefined' ? window.localStorage : localStorage;

export class GraphiQL extends React.PureComponent<Props> {
  private _graphqlFetcher = graphQLFetcher(this.props.client);

  public render(): JSX.Element {
    return (
      <GraphiQLComponent fetcher={this._graphqlFetcher} storage={storage}>
        <GraphiQLComponent.Logo>
          <span></span>
        </GraphiQLComponent.Logo>
      </GraphiQLComponent>
    );
  }
}
