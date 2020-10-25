const validator = require('express-joi-validation').createValidator({});

const { sendCommand: sendCommandValidator } = require('./controllers/schemas/MapCoordinatesSchema');

const { sendCommand: sendCommandAction } = require('./controllers/MapCoordinatesController');

module.exports = app => {
  // MapCoordinates Routes
  app.post('/api/send-command', validator.body(sendCommandValidator), sendCommandAction);
};
