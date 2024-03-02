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
            <input type='text' id='author' name='author' required />
            <br />

            <label for='year'>Year:</label>
            <br />
            <input type='text' id='year' name='year' />
            <br />

            <label htmlFor='binding'>Binding:</label>
            <br />
            <select id='binding' name='binding'>
              <option value='binding-1'>Dropdown or text input?</option>
              <option value='binding-2'>Binding Type #2</option>
              <option value='binding-3'>Binding Type #3</option>
            </select>
            <br />

            <label htmlFor='ownership-marking'>Mark of Ownership:</label>
            <br />
            <input
              type='text'
              id='ownership-marking'
              placeholder='larger text area?'
            />
            <br />

            <label htmlFor='purchase-year'>Purchase Year:</label>
            <br />
            <input type='text' id='purchase-year' name='purchase-year' />
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
            <textarea id='notes' name='notes'></textarea>
            <br />

            <input type='submit' value='Add New Book' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
