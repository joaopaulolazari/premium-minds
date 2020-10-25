const mongoose = require('mongoose');

const MapCoordinates = mongoose.model('MapCoordinates');

const findCoordinate = async coordinates => {
  const coordinate = await MapCoordinates.findOne(coordinates);
  return coordinate;
};

const getLastCoordinate = async () => {
  const lastCoordinate = await MapCoordinates.findOne({}).sort({ _id: -1 }).limit(1);
  return lastCoordinate;
};

const insertCoordinate = async coordinates => {
  const model = new MapCoordinates(coordinates);
  const newCoordinate = await model.save();
  return newCoordinate;
};

const removeCoordinate = async coordinates => {
  await MapCoordinates.deleteOne(coordinates);
};

const resetCollection = async () => {
  await MapCoordinates.deleteMany();
};

const count = async () => {
  const countCoordinates = await MapCoordinates.countDocuments();
  return countCoordinates;
};

module.exports = {
  findCoordinate,
  getLastCoordinate,
  insertCoordinate,
  removeCoordinate,
  resetCollection,
  count
};
