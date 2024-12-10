import React, {useEffect, useState} from 'react';
import { getBooks } from '../api/bookApi';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

interface Book{
    id: number;
    title: string;
    author: string;
    category: string;
    year: number;
    publisher: string;
    data_entry: string;
}
const BookList:React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);


    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const data = await getBooks();
                setBooks(data);
            }catch(error){
                console.error('erro ao buscar livros', error);
            }
        };
        fetchBooks();
    }, [])


  return (
    <TableContainer component={Paper}>
        <Typography variant="h4" align='center' gutterBottom>
            Biblioteca
        </Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Título</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell>Gênero</TableCell>
                    <TableCell>Ano</TableCell>
                    <TableCell>Editora</TableCell>
                    <TableCell>Ações</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {books.map((book) => (
                    <TableRow key={book.id}>
                        <TableCell>{book.title}</TableCell>
                        <TableCell> {book.author} </TableCell>
                        <TableCell> {book.category} </TableCell>
                        <TableCell> {book.year} </TableCell>
                        <TableCell> {book.publisher} </TableCell>
                        <TableCell>
                                <Button color="primary" variant="contained" size="small">
                                    Editar
                                </Button>
                                &nbsp;
                                <Button color="secondary" variant="contained" size="small">
                                    Excluir
                                </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default BookList;