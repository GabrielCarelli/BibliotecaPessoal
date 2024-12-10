const BookModel = require('../models/BookModel');

module.exports = {
    getAllBooks: (req, res) => {
        BookModel.findAll((err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(rows);
            }
        });
    },

    createBook: (req, res) => {
        const { title, author, category, year, publisher} = req.body;

        // Validações básicas
        if (!title || !author || !category || !year || !publisher) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        BookModel.create({ title, author, category, year, publisher}, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Livro criado com sucesso!' });
            }
        });
    },
};
