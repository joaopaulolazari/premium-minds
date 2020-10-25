const validator = require('express-joi-validation').createValidator({})

const mapCoordinatesSchemas = require('../controllers/schemas/MapCoordinatesSchema');

module.exports = (app) => {
  const mapCoordinatesController = require('../controllers/MapCoordinatesController');

  // MapCoordinates Routes
  app
    .post(
      '/map-coordinates',
      validator.body(mapCoordinatesSchemas.create),
      mapCoordinatesController.create
    );

  /*app
    .route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);*/
};
