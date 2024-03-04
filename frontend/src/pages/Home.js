import { useEffect, useState } from 'react';
import BookDetails from '../components/BookDetails';

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
          {books && books.map((book) => <BookDetails book={book} />)}
        </div>
        <div className='add-book-form'>
          <form>
            <label for='title'>Book Title:</label>
            <br />
            <input type='text' id='title' name='title' required />
            <br />

            <label for='author'>Author (optional):</label>
            <br />
            <input type='text' id='author' name='author' />
            <br />

            <label for='year'>Year:</label>
            <br />
            <input type='text' id='year' name='year' required />
            <br />

            <label htmlFor='binding'>Binding:</label>
            <br />
            <input type='text' id='binding' name='binding' required />
            <br />

            <label htmlFor='provenance'>Provenance:</label>
            <br />
            <textarea name='provenance' id='provenance' />
            <br />

            <label htmlFor='purchase-year'>Purchase Year:</label>
            <br />
            <input
              type='text'
              id='purchase-year'
              name='purchase-year'
              required
            />
            <br />

            <label htmlFor='purchased-from'>Purchased From:</label>
            <br />
            <input
              type='text'
              name='purchased-from'
              id='purchased-from'
              required
            />
            <br />

            <label for='purchase-price'>Purchase Price:</label>
            <br />
            <input
              type='text'
              id='purchase-price'
              name='purchase-price'
              required
            />
            <br />

            <label for='current_price'>Current Price Estimate:</label>
            <br />
            <input
              type='text'
              id='current_price'
              name='current_price'
              required
            />
            <br />

            <label htmlFor='notes'>Notes:</label>
            <br />
            <textarea id='notes' name='notes' />
            <br />

            <input type='submit' value='Add New Book' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
