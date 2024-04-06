import React from 'react';

function BookItem({ book, onClick }) {
  return (
    <div className="book-item" onClick={onClick}>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
    </div>
  );
}

export default BookItem;