const BookDetails = ({ book }) => {
  return (
    <div className='book-details'>
      <h3>{book.title}</h3>
      <p>
        <strong>Author: </strong>
        {book.author}
      </p>
      <p>
        <strong>Year: </strong>
        {book.year}
      </p>
      <p>
        <strong>Provenance: </strong>
        {book.provenance}
      </p>
      <p>
        <strong>Purchase Year: </strong>
        {book.purchaseYear}
      </p>
      <p>
        <strong>Purchased From:</strong>
        {book.purhcasedFrom}
      </p>
      <p>
        <strong>Purchase Price: </strong>
        {book.purchasePrice}
      </p>
      <p>
        <strong>Current Price:</strong>
        {book.currentPrice}
      </p>
      <p>
        <strong>Notes: </strong>
      </p>
      <p>
        Created {new Date(book.createdAt).toLocaleDateString}, last updated
        {book.updatedAt}
      </p>
    </div>
  );
};

export default BookDetails;
