const mongoose = require('mongoose');
const MapCoordinates = mongoose.model('MapCoordinates');

const findCoordinate = async (coordinates) => {
  return await MapCoordinates.findOne(coordinates);
};

const getLastCoordinate = async () => {
  return await MapCoordinates.findOne({}).sort({ _id: -1 }).limit(1);
};

const insertCoordinate = async (coordinates) => {
  const newCoordinate = new MapCoordinates(coordinates);
  return await newCoordinate.save();
};

const removeCoordinate = async (coordinates) => {
  return await MapCoordinates.deleteOne(coordinates);
};

module.exports = {
  findCoordinate,
  getLastCoordinate,
  insertCoordinate,
  removeCoordinate
}
