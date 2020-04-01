const mongoose = require('mongoose');

/**
 * Informando que vai usar api de Promise do node
 * para não aparecer o warning de deprecate do mongoose
 */
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true, //devido a warnings de deprecate no mongo foi necessário adicionar esses parâmetros
    useUnifiedTopology: true,
});