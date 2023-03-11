import { Dispatch, SetStateAction } from 'react';

export interface Book {
  id: string;
  title: string;
}

export interface BookShowProps {
  book: Book;
}

export interface BookEditProps {
  book: Book;
  onCancel: () => void;
  onUpdate: (id: string, title: string) => void;
}

export interface BooksContextType {
  books: Array<Book>;
  fetchBooks: () => Promise<void>;
  createBook: (title: string) => Promise<void>;
  deleteBookById: (id: string) => Promise<void>;
  updateBook: (id: string, title: string) => Promise<void>;
}