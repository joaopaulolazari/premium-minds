'use strict';

module.exports = function(app) {
  const mapCoordinatesController = require('../controllers/MapCoordinatesController');

  // MapCoordinates Routes
  app
    .route('/map-coordinates')
    //.get(todoList.list_all_tasks)
    .post(mapCoordinatesController.create);

  /*app
    .route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);*/
};
