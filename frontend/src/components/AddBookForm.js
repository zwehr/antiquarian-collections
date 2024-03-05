import { useState } from 'react';

export default function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [binding, setBinding] = useState('');
  const [provenance, setProvenance] = useState('');
  const [purchaseYear, setPurchaseYear] = useState('');
  const [purchasedFrom, setPurchasedFrom] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState(null);

  // year options for purchaseYear dropdown
  const years = [];
  for (let year = 2024; year >= 1980; year--) {
    years.push(year);
  }

  const handleYearChange = (e) => {
    setPurchaseYear(parseInt(e.target.value));
  };

  const clearFormInputs = () => {
    setTitle('');
    setAuthor('');
    setYear('');
    setBinding('');
    setProvenance('');
    setPurchaseYear('');
    setPurchasedFrom('');
    setPurchasePrice('');
    setCurrentPrice('');
    setNotes('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      year,
      binding,
      provenance,
      purchaseYear,
      purchasedFrom,
      purchasePrice,
      currentPrice,
      notes,
    };

    const response = await fetch(
      'https://antiquarian-collections.onrender.com/api/books',
      {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      clearFormInputs();
      setError(null);
      console.log('New book added', json);
    }
  };

  return (
    <form className='add-book-form' onSubmit={handleSubmit}>
      <label htmlFor='title'>Book Title:</label>
      <br />
      <input
        type='text'
        id='title'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />

      <label htmlFor='author'>Author (optional):</label>
      <br />
      <input
        type='text'
        id='author'
        name='author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />

      <label htmlFor='year'>Year:</label>
      <br />
      <input
        type='number'
        id='year'
        name='year'
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <br />

      <label htmlFor='binding'>Binding:</label>
      <br />
      <input
        type='text'
        id='binding'
        name='binding'
        value={binding}
        onChange={(e) => setBinding(e.target.value)}
        required
      />
      <br />

      <label htmlFor='provenance'>Provenance:</label>
      <br />
      <textarea
        name='provenance'
        id='provenance'
        value={provenance}
        onChange={(e) => setProvenance(e.target.value)}
      />
      <br />

      <label htmlFor='purchase-year'>Purchase Year:</label>
      <br />
      <select
        id='purchase-year'
        value={purchaseYear}
        onChange={handleYearChange}
      >
        <option value=''>-- Select Year --</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <br />

      <label htmlFor='purchased-from'>Purchased From:</label>
      <br />
      <input
        type='text'
        name='purchased-from'
        id='purchased-from'
        value={purchasedFrom}
        onChange={(e) => setPurchasedFrom(e.target.value)}
        required
      />
      <br />

      <label htmlFor='purchase-price'>Purchase Price:</label>
      <br />
      <input
        type='number'
        id='purchase-price'
        name='purchase-price'
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        required
      />
      <br />

      <label htmlFor='current_price'>Current Price Estimate:</label>
      <br />
      <input
        type='number'
        id='current_price'
        name='current_price'
        value={currentPrice}
        onChange={(e) => setCurrentPrice(e.target.value)}
        required
      />
      <br />

      <label htmlFor='notes'>Notes:</label>
      <br />
      <textarea
        id='notes'
        name='notes'
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <br />

      <input type='submit' value='Add New Book' />
    </form>
  );
}
