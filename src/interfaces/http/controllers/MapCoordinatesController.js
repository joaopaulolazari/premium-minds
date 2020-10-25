const { moveInMap } = require('../../../app/services/MapCoordinatesService');

const sendCommand = (req, res) => {
  try {
    const coordinate = moveInMap(req.body);
    res.json(coordinate);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  sendCommand
};
