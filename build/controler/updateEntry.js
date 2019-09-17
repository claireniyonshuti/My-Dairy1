'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dairy = require('../model/dairy');

var _dairy2 = _interopRequireDefault(_dairy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateEntry = function updateEntry(req, res) {
  var id = parseInt(req.params.id, 10);
  var modifyFound = void 0;
  var itemIndex = void 0;
  _dairy2.default.map(function (dairy, index) {
    if (dairy.id === id) {
      modifyFound = dairy;
      itemIndex = index;
    }
  });

  if (!modifyFound) {
    return res.status(404).send({
      status: 404,
      message: 'Entry not found'
    });
  }

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

  var modifiedEntry = {
    id: modifyFound.id,
    title: req.body.title || modifyFound.title,
    description: req.body.description || modifyFound.description
  };

  _dairy2.default.splice(itemIndex, 1, modifiedEntry);

  return res.status(201).send({
    status: 200,
    message: 'Entry modified successfully',
    modifiedEntry: modifiedEntry
  });
};

exports.default = updateEntry;