"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _connect = _interopRequireDefault(require("./connect"));

var _listRoute = _interopRequireDefault(require("./routes/listRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _connect["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use('/api/list', _listRoute["default"]);
var PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log("Listening on port: ".concat(PORT));