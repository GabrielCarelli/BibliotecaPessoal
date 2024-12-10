import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export const getBooks = async () =>{
    const response = await api.get('/books');
    return response.data;
}

export const createBook = async (book: {title: string; author: string; category: string; year: number; publisher: string; data_entry: string;}) =>{
    const response = await api.post('/books', book);
    return response.data;
}

export default api;