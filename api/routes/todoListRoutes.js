'use strict';

module.exports = function(app){
  let todolist = require('../controllers/todoListController');
  app.route('/tasks')
    .get(todolist.list_all_tasks)
    .post(todolist.create_a_task);

  app.route('/task/:taskId')
    .get(todolist.read_a_task)
    .put(todolist.update_a_task)
    .delete(todolist.delete_a_task)
}