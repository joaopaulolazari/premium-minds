const Joi = require('joi');

const create = Joi.object({
  command: Joi.string().valid('N', 'S', 'L', 'O', 'F', 'C').required()
});

module.exports = {
  create
}
