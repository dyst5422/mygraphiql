"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var GraphiQLComponent = require("graphiql");
// tslint:disable-next-line:no-require-imports
var localStorage = require("localStorage");
var React = require("react");
var graphQLFetcher_1 = require("./graphQLFetcher");
// tslint:disable-next-line:no-import-side-effect
require("./graphiql.style");
// tslint:disable-next-line:no-var-requires no-require-imports
var storage = typeof window !== 'undefined' ? window.localStorage : localStorage;
var GraphiQL = /** @class */ (function (_super) {
    __extends(GraphiQL, _super);
    function GraphiQL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._graphqlFetcher = graphQLFetcher_1.graphQLFetcher(_this.props.client);
        return _this;
    }
    GraphiQL.prototype.render = function () {
        return (React.createElement(GraphiQLComponent, { fetcher: this._graphqlFetcher, storage: storage },
            React.createElement(GraphiQLComponent.Logo, null,
                React.createElement("span", null))));
    };
    return GraphiQL;
}(React.PureComponent));
exports.GraphiQL = GraphiQL;
//# sourceMappingURL=GraphiQL.js.map