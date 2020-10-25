'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MapCoordinatesSchema = new Schema({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('MapCoordinates', MapCoordinatesSchema);
