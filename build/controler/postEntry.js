'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dairy = require('../model/dairy');

var _dairy2 = _interopRequireDefault(_dairy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postEntry = function postEntry(req, res) {
  if (!req.body.title) {
    return res.status(400).send({
      status: 400,
      message: 'title is required'
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      status: 400,
      message: 'description is required'
    });
  }
  var dairy = {
    id: _dairy2.default.length + 1,
    title: req.body.title,
    description: req.body.description
  };
  _dairy2.default.push(dairy);
  return res.status(200).send({
    status: 200,
    message: 'Entry added successfully',
    data: dairy
  });
};

exports.default = postEntry;