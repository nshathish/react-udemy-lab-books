import { useContext, useEffect } from 'react';


import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import BooksContext from './context/BooksContext';


function App() {

  const { fetchBooks } = useContext(BooksContext)!;

  useEffect(() => {
    (async () => {
      await fetchBooks();
    })();
  }, []);


  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
