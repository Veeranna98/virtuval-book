import React from 'react';

const Book = ({ book, handleBookClick }) => {
  return (
    <div className="book" onClick={() => handleBookClick(book)}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors.join(', ')}</p>
    </div>
  );
};

export default Book;