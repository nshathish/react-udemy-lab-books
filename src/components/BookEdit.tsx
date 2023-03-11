import { ChangeEvent, useContext, useState } from 'react';

import { BookEditProps } from '../typings';


function BookEdit({ book, onCancel, onUpdate }: BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(book.id, title);
  };

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange} />
      <button className='button is-primary' type='submit'>
        Save
      </button>
    </form>
  );
}

export default BookEdit;