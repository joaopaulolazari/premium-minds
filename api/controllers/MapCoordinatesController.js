'use strict';

const mongoose = require('mongoose');

const MapCoordinates = mongoose.model('MapCoordinates');

exports.listAllMapCoordinates = function(req, res) {
  MapCoordinates.find({}, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.create = function(req, res) {
  const newCoordinate = new MapCoordinates(req.body);
  console.log('newCoordinate', newCoordinate)
  newCoordinate.save(function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};
