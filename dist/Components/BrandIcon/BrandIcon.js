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
var React = require("react");
var BrandIcon = /** @class */ (function (_super) {
    __extends(BrandIcon, _super);
    function BrandIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandIcon.prototype.render = function () {
        return (React.createElement("div", { id: 'brand-icon' },
            React.createElement("link", { href: 'https://fonts.googleapis.com/css?family=Montserrat', rel: 'stylesheet' }),
            React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', style: { height: this.props.height }, viewBox: '0 0 1800 400' },
                React.createElement("g", null,
                    this.props.moving ? React.createElement("animateTransform", { attributeName: 'transform', type: 'rotate', from: '0 200 200', to: '360 200 200', dur: '3s', repeatDur: 'indefinite' }) : undefined,
                    React.createElement("path", { fill: '#E10098', d: 'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z' }),
                    React.createElement("path", { fill: '#E10098', d: 'M39.8 272.2h320.3v16.6H39.8z' }),
                    React.createElement("path", { fill: '#E10098', d: 'M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z' }),
                    React.createElement("path", { fill: '#E10098', d: 'M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z' }),
                    React.createElement("path", { fill: '#E10098', d: 'M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z' }),
                    React.createElement("path", { fill: '#E10098', d: 'M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z' }),
                    React.createElement("path", { fill: '#E10098', d: 'M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9' })),
                React.createElement("text", { x: '400', y: '300', fill: '#95989A', fontFamily: 'Montserrat', fontSize: '300', textAnchor: 'start', textRendering: 'optimizeLegibility' }, "GraphiQL"))));
    };
    return BrandIcon;
}(React.PureComponent));
exports.BrandIcon = BrandIcon;
//# sourceMappingURL=BrandIcon.js.map