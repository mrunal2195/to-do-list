"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connect = function connect() {
  var dbuser = 'mrunal';
  var dbpassword = 'mrunal21';
  var dbname = 'summer-2019';
  var connectString = "mongodb://".concat(dbuser, ":").concat(dbpassword, "@ds151876.mlab.com:51876/").concat(dbname);

  _mongoose["default"].connect(connectString);
};

var _default = connect;
exports["default"] = _default;