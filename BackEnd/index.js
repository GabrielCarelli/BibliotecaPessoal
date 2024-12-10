const express = require('express');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();

// Configurar middlewares
app.use(cors()); // Permitir conexões de outros domínios (ex.: frontend)
app.use(express.json()); // Habilitar JSON no corpo das requisições

// Rotas
app.use('/books', bookRoutes); // Rotas relacionadas a livros

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
