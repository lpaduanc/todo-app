const mongoose = require('mongoose');

/**
 * Informando que vai usar api de Promise do node
 * para n�o aparecer o warning de deprecate do mongoose
 */
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true, //devido a warnings de deprecate no mongo foi necess�rio adicionar esses par�metros
    useUnifiedTopology: true,
});