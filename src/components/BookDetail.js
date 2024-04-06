import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <button onClick={() => window.open(book.volumeInfo.previewLink, '_blank')}>
        Read Now
      </button>
      <button onClick={() => window.open(book.volumeInfo.infoLink, '_blank')}>
        More Info
      </button>
    </div>
  );
};

export default BookDetail;