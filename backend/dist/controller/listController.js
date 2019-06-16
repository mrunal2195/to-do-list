"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = _interopRequireDefault(require("../models/list.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createItem = function createItem(item) {
  return _list["default"].create(item);
};

var modifyItem = function modifyItem(itemId, item) {
  return _list["default"].findOneAndUpdate({
    _id: itemId
  }, item);
};

var deleteItem = function deleteItem(itemId) {
  return _list["default"].findOneAndDelete({
    _id: itemId
  });
};

var getItems = function getItems() {
  return _list["default"].find();
};

var _default = {
  createItem: createItem,
  modifyItem: modifyItem,
  deleteItem: deleteItem,
  getItems: getItems
};
exports["default"] = _default;