const db = require('../config/database');

// Inicializar a tabela de livros
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            category TEXT NOT NULL,
            year INTEGER NOT NULL
        )
    `);
});

// CRUD
module.exports = {
    findAll: (callback) => db.all('SELECT * FROM books', callback),
    create: (book, callback) =>
        db.run(
            'INSERT INTO books (title, author, category, year, publisher) VALUES (?, ?, ?, ?, ?)',
            [book.title, book.author, book.category, book.year],
            callback
        ),
};
