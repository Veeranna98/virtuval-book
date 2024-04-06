import React from 'react';

const BookList = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <div className="book" key={book.id} onClick={() => onBookClick(book)}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <p>{book.volumeInfo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;