const Todo = require('./todo'); //recebe o resultado do exportes do arquivo no ./todo

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ new: true, runValidators: true });
//new retorna o registro atualizado
//runValidators faz a validação das atualizações

module.exports = Todo;
