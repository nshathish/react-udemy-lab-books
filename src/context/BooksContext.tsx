import { createContext, useState } from 'react';
import axios from 'axios';

import { Book, BooksContextType } from '../typings';


const BASE_URL = 'http://localhost:3001/books';

const BooksContext = createContext<BooksContextType | null>(null);

export function Provider({ children }: any) {
  const [books, setBooks] = useState<Array<Book>>([]);

  const fetchBooks = async (): Promise<void> => {
    const { data } = await axios.get<Array<Book>>(BASE_URL);
    setBooks(data);
  };

  const createBook = async (title: string): Promise<void> => {
    const { data: book } = await axios.post<Book>(BASE_URL, { title });

    const updatedBooks = [
      ...books,
      book
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id: string): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const updateBook = async (id: string, title: string): Promise<void> => {
    const { data } = await axios.put<Book>(`${BASE_URL}/${id}`, { title });
    const updatedBooks = books.map((book: Book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    updateBook
  };


  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}


export default BooksContext;