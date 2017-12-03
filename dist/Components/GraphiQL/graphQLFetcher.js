"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
exports.NetworkStatus = react_apollo_1.NetworkStatus;
var Observable_1 = require("react-apollo/node_modules/apollo-client/util/Observable");
exports.Observable = Observable_1.Observable;
var hasSubscriptionOperation = function (graphQlParams) {
    var queryDoc = graphql_1.parse(graphQlParams.query);
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'subscription') {
                return true;
            }
        }
    }
    return false;
};
exports.graphQLFetcher = function (apolloClient) {
    return function (graphQLParams) {
        if (hasSubscriptionOperation(graphQLParams)) {
            return {
                subscribe: function (observer) {
                    observer.next('Your subscription data will appear here after server publication!');
                    return apolloClient.subscribe({
                        query: graphql_tag_1.default(graphQLParams.query),
                        variables: graphQLParams.variables,
                    });
                },
            };
        }
        else {
            return apolloClient.query(__assign({}, graphQLParams, { query: graphql_tag_1.default(graphQLParams.query) }));
        }
    };
};
//# sourceMappingURL=graphQLFetcher.js.map