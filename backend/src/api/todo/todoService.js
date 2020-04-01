const Todo = require('./todo');

Todo.methods([ 'get', 'post', 'put', 'delete' ]); //requisi��es habilitadas na api
Todo.updateOptions({
    new: true,
    runValidators: true,
});

module.exports = Todo;