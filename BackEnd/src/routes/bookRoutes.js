const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.get('/', BookController.getAllBooks); // Endpoint GET /books
router.post('/', BookController.createBook); // Endpoint POST /books

module.exports = router;
