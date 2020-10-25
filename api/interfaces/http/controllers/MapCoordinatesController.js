const mongoose = require('mongoose');
const {
  moveInMap
} =  require('../../../services/MapCoordinatesService');

const MapCoordinates = mongoose.model('MapCoordinates');

const listAllMapCoordinates = (req, res) => {
  MapCoordinates.find({}, function(err, task) {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

const sendCommand = (req, res) => {
  try {
    const coordinate = moveInMap(req.body);
    res.json(coordinate);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  sendCommand,
  listAllMapCoordinates
}
