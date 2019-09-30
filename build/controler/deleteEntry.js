'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dairy = require('../model/dairy');

var _dairy2 = _interopRequireDefault(_dairy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteEntry = function deleteEntry(req, res) {
  var id = parseInt(req.params.id, 10);

  _dairy2.default.map(function (dairy, index) {
    if (dairy.id === id) {
      _dairy2.default.splice(index, 1);
      return res.status(200).send({
        status: 200,
        message: 'Entry successful deleted'
      });
    }
  });

  return res.status(404).send({
    status: 400,
    message: 'Entry not found'
  });
};

exports.default = deleteEntry;