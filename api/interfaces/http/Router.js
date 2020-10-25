const validator = require('express-joi-validation').createValidator({})

const mapCoordinatesSchemas = require('./controllers/schemas/MapCoordinatesSchema');
const mapCoordinatesController = require('./controllers/MapCoordinatesController');

module.exports = (app) => {
  // MapCoordinates Routes
  app
    .post(
      '/api/send-command',
      validator.body(mapCoordinatesSchemas.create),
      mapCoordinatesController.sendCommand
    );
};
