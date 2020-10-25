const mongoose = require('mongoose');

const { Schema } = mongoose;

const MapCoordinatesSchema = new Schema({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
});

MapCoordinatesSchema.index({ x: 1, y: 1 }, { unique: true });

module.exports = mongoose.model('MapCoordinates', MapCoordinatesSchema);
