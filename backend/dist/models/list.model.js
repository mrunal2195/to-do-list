"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listschema = new _mongoose["default"].Schema({
  item: String,
  isChecked: {
    type: Boolean,
    "default": false
  },
  date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = _mongoose["default"].model('List', listschema);