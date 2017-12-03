// declare module 'graphiql' {
//   import { ExecutionResult } from 'graphql';
//   // tslint:disable-next-line:interface-name
//   interface Request {
//     debugName?: string;
//     query?: string;
//     variables?: object;
//     operationName?: string | null;
//   }

//   type Props = {
//     fetcher: (request: Request) => Promise<ExecutionResult>;
//     storage?: Storage
//   };

//   class GraphiQL extends React.PureComponent<Props>{}

//   GraphiQL.Logo = React.Component;

//   export = {
//     new (): GraphiQL(),
//   };
// }

declare module 'graphiql';

declare module 'localStorage' {
  export = new Storage();
}
