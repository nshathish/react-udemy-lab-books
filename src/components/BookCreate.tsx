import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import BooksContext from '../context/BooksContext';


function BookCreate() {
  const [title, setTitle] = useState('');

  const { createBook } = useContext(BooksContext)!;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} className='input' />
        <button type='submit' className='button'>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;