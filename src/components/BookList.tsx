import { useContext } from 'react';

import BookShow from './BookShow';

import BooksContext from '../context/BooksContext';

import { Book } from '../typings';


function BookList() {
  const{books}=useContext(BooksContext)!

  const renderedBooks = books.map((book: Book) =>
    <BookShow key={book.id} book={book}  />
  );


  return (
    <div className='book-list'>
      {renderedBooks}
    </div>
  );
}

export default BookList;