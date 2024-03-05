export default function BookDetails({ book }) {
  return (
    <div className='book-details'>
      <h3>{book.title}</h3>
      <p>
        <span className='book-detail'>Author:</span> {book.author}
      </p>
      <p>
        <span className='book-detail'>Year:</span> {book.year}
      </p>
      <p>
        <span className='book-detail'>Binding:</span> {book.binding}
      </p>
      <p>
        <span className='book-detail'>Provenance:</span> {book.provenance}
      </p>
      <p>
        <span className='book-detail'>Purchase Year:</span> {book.purchaseYear}
      </p>
      <p>
        <span className='book-detail'>Purchased From:</span>{' '}
        {book.purchasedFrom}
      </p>
      <p>
        <span className='book-detail'>Purchase Price:</span>{' '}
        {book.purchasePrice}
      </p>
      <p>
        <span className='book-detail'>Current Price Estimate:</span>{' '}
        {book.currentPrice}
      </p>
      <p>
        <span className='book-detail'>Notes:</span> {book.notes}
      </p>
      <p>
        <span className='book-detail'>Added:</span> {book.createdAt}
      </p>
    </div>
  );
}
