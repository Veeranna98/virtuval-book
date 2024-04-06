import React from 'react';

function BookDetail({ book, onClose }) {
  return (
    <div className="book-detail">
      <button onClick={onClose}>Close</button>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
    </div>
  );
}

export default BookDetail;