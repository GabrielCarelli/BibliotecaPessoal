import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';

const BookForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [year, setYear] = useState<number | string>('');
    const [publisher, setPublisher] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newBook = { title, author, category, year: Number(year), publisher };

        try {
            const response = await fetch('http://localhost:3001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBook),
            });

            if (response.ok) {
                alert('Livro adicionado com sucesso!');
                setTitle('');
                setAuthor('');
                setCategory('');
                setYear('');
                setPublisher('');
            } else {
                alert('Erro ao adicionar livro.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <Paper style={{ padding: '20px', maxWidth: 600, margin: '20px auto' }}>
            <Typography variant="h5" align="center" gutterBottom>
                Adicionar Novo Livro
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Título"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Autor"
                            fullWidth
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Categoria"
                            fullWidth
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Ano de Publicação"
                            fullWidth
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Editora"
                            fullWidth
                            type="string"
                            value={publisher}
                            onChange={(e) => setPublisher(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" color="primary" variant="contained" fullWidth>
                            Adicionar Livro
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default BookForm;
