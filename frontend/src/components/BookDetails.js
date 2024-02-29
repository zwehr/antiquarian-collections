export default function BookDetails({ book }) {
  return (
    <div className='book-details'>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Added: {book.createdAt}</p>
    </div>
  );
}
