const validator = require('express-joi-validation').createValidator({});

const { sendCommand: sendCommandValidator } = require('./controllers/schemas/MapCoordinatesSchema');

const { countAction, resetAction, sendCommandAction } = require('./controllers/MapCoordinatesController');

module.exports = app => {
  // MapCoordinates Routes
  app.get('/api/count', countAction);
  app.post('/api/reset', resetAction);
  app.post('/api/send-command', validator.body(sendCommandValidator), sendCommandAction);
};
