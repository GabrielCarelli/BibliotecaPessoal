import React, {useEffect, useState} from 'react';
import { getBooks } from '../api/bookApi';

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
    <div>
        <h2>
            Lista de Livros
        </h2>
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <strong> {book.title} por {book.author} ({book.year}) </strong>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BookList;