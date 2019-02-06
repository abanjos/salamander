"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _product = require("./components/product");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = (0, _express.default)();
exports.App = App;
App.use(_bodyParser.default.json());
App.use(_product.ProductsRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwidXNlIiwiYm9keXBhcnNlciIsImpzb24iLCJQcm9kdWN0c1JvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLHVCQUFaOztBQUVBQSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsb0JBQVdDLElBQVgsRUFBUjtBQUVBSCxHQUFHLENBQUNDLEdBQUosQ0FBUUcsdUJBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgYm9keXBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IHsgUHJvZHVjdHNSb3V0ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZHVjdCdcclxuXHJcbmNvbnN0IEFwcCA9IGV4cHJlc3MoKVxyXG5cclxuQXBwLnVzZShib2R5cGFyc2VyLmpzb24oKSlcclxuXHJcbkFwcC51c2UoUHJvZHVjdHNSb3V0ZXIpXHJcblxyXG5leHBvcnQgeyBBcHAgfSJdfQ==