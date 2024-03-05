import { useEffect, useState } from 'react';
import BookDetails from '../components/BookDetails';
import AddBookForm from '../components/AddBookForm';

const Home = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        'https://antiquarian-collections.onrender.com/api/books'
      );
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className='home'>
      <div className='books-form-container'>
        <div className='books'>
          {books &&
            books.map((book) => <BookDetails book={book} key={book._id} />)}
        </div>
        <AddBookForm />
      </div>
    </div>
  );
};

export default Home;
