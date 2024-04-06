import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response1 = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
      const response2 = await fetch('https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes');
      const data1 = await response1.json();
      const data2 = await response2.json();
      const combinedBooks = [...data1.items, ...data2.items];
      setBooks(combinedBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const handleCloseDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Bookstore</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className="main-content">
        <BookList books={books} onBookClick={handleBookClick} />
        {selectedBook && <BookDetail book={selectedBook} onClose={handleCloseDetail} />}
      </div>
    </div>
  );
}

export default App;