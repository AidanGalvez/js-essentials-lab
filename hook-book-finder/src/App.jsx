import { useState} from "react";
import useHttp from "./hooks/useHttp";
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error, sendRequest: fetchBooks} = useHttp();

  const handleFetchedBooks = (booksData) => {

    const loadBooks = booksData.docs.map((book) => {
        return {
          id: book.key,
          title: book.title,
          author: book.author_name,
          publishYear: book.first_publish_year,
        };
    });

    setBooks(loadBooks);

  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!searchTerm.trim()){
      setBooks([]);
      return;
    }

    fetchBooks(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}&limit=10`, {}, handleFetchedBooks)
    
  }

  const searchInputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="container">
      <section>
        <h1>Book Search</h1>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            value={searchTerm}
            onChange={searchInputChangeHandler}
            placeholder ="Enter: Title, Author, or Topic"
          />
          <button type="submit" disabled={isLoading}> 
            {isLoading ? "Searching For Books..." : "Search Books"}
          </button>
          <br/><br/>
        </form>
        {isLoading && <p>Loading Books...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <BookList books={books} />
      </section>
    </main>
  );
}

export default App;