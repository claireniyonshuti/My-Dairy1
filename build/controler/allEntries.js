'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dairy = require('../model/dairy');

var _dairy2 = _interopRequireDefault(_dairy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllEntries = function getAllEntries(req, res) {
  res.status(200).json({
    status: 'true',
    message: 'Retrieved successfully',
    data: _dairy2.default
  });
};

exports.default = getAllEntries;