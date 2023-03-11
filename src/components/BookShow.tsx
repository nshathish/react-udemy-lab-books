import { useContext, useState } from 'react';


import BookEdit from './BookEdit';

import BooksContext from '../context/BooksContext';

import { BookShowProps } from '../typings';


function BookShow({ book }: BookShowProps) {
  const [isBookEdited, setIsBookEdited] = useState(false);

  const { deleteBookById, updateBook } = useContext(BooksContext)!;

  const handleDelete = async () => {
    await deleteBookById(book.id);
  };

  const handleEdit = () => {
    setIsBookEdited(!isBookEdited);
  };

  const handleUpdate = async (id: string, title: string) => {
    await updateBook(id, title);
    setIsBookEdited(false);
  };

  const content = isBookEdited
    ? <BookEdit book={book} onCancel={() => {
    }} onUpdate={handleUpdate} />
    : <h3>{book.title}</h3>;

  return (
    <div className='book-show'>
      <img
        alt='books'
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>Edit</button>
        <button className='delete' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;