const Todo = require('./todo');

Todo.methods([ 'get', 'post', 'put', 'delete' ]); //requisições habilitadas na api
Todo.updateOptions({
    new: true,
    runValidators: true,
});

module.exports = Todo;