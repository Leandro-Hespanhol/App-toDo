const express = require('express');

module.exports = function (server) {
  //API Routes
  const router = express.Router();
  server.use('/api', router); //todo server.use é um middleware | e o router vai ser chamado com o /api

  //TODO Routes
  const todoService = require('../api/todo/todoService');
  todoService.register(router, '/todos');
};
