'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dairy = require('../model/dairy');

var _dairy2 = _interopRequireDefault(_dairy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOneEntry = function getOneEntry(req, res) {
  var entryId = _dairy2.default.find(function (i) {
    return i.id == parseInt(req.params.id, 10);
  });
  if (entryId) {
    return res.status(200).send({
      status: 200,
      message: 'Entry retrieved successfully',
      data: entryId
    });
  }
  if (!entryId) {
    return res.status(404).send({
      status: 404,
      message: 'Entry does not exist'
    });
  }
};
exports.default = getOneEntry;