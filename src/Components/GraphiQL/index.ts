import { withApollo } from 'react-apollo';
import { GraphiQL as GraphiQLComponent } from './GraphiQL';

// tslint:disable-next-line:variable-name
export const GraphiQL = withApollo(GraphiQLComponent);
