"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _listController = _interopRequireDefault(require("../controller/listController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listRouter = _express["default"].Router();

listRouter.get('/', function (req, res) {
  _listController["default"].getItems().then(function (items) {
    return res.send(items);
  });
});
listRouter.post('/', function (req, res) {
  _listController["default"].createItem(req.body).then(function (item) {
    return res.send(item);
  });
});
listRouter.put('/:id', function (req, res) {
  var itemId = req.params.id;

  _listController["default"].modifyItem(itemId, req.body).then(function (item) {
    return res.send(item);
  });
});
listRouter["delete"]('/:id', function (req, res) {
  _listController["default"].deleteItem(req.params.id).then(function (item) {
    return res.send(item);
  });
});
var _default = listRouter;
exports["default"] = _default;