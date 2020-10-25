const Joi = require('joi');

const sendCommand = Joi.object({
  command: Joi.string().valid('N', 'S', 'L', 'O').required()
});

module.exports = {
  sendCommand
};
