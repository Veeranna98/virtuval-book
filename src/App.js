import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [books, setBooks] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedBook, setSelectedBook] = useState(null); 

 
  useEffect(() => {
    fetchBooks('harry+potter');
    fetchBooks('sherlock+holmes');
  }, []);

  
  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBooks(prevBooks => [...prevBooks, ...data.items]); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 
  const handleSearch = async () => {
    if (searchQuery.trim() !== '') {
      setBooks([]); 
      await fetchBooks(searchQuery);
    }
  };

 
  const handleBookClick = (book) => {
    setSelectedBook(book); 
  };

  return (
    <div className="App">
      <header>
        <h1>Virtual Bookstore</h1>
     
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for books..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main>
     
        <div className="book-grid">
          {books.map(book => (
            <div key={book.id} className={`book ${selectedBook === book && 'selected'}`} onClick={() => handleBookClick(book)}>
              <img src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'} alt={book.volumeInfo.title} />
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors?.join(', ')}</p>
            
              {selectedBook === book && (
                <div className="book-details">
                  <p>{book.volumeInfo.description}</p>
                  <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
                  <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;