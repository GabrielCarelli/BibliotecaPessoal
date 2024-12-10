const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, '../../sqlite.db'), (err) => {
    if (err) console.error('Erro ao conectar ao SQLite', err);
    else console.log('Conexão bem-sucedida ao SQLite');
});

module.exports = db;
