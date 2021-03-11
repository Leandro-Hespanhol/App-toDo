const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //útil apenas para tirar mensagem de alerta.
module.exports = mongoose.connect('mongodb://localhost/todo');
