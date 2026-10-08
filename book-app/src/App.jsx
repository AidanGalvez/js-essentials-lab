import { useState, useEffect, useCallback } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const URL = "http://localhost:3000/books"

  // TODO: Complete fetchBooksHandler
  const fetchBooksHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch(URL);

      if(!response.ok){
          throw new Error('Failed to retreive books.');
        }

      const data = await response.json();
      /*
      const loadedBooks = [];

      for (const key in data){
        loadedBooks.push({
          id:key,
          title: data[key].title,
          author: data[key].author,
          publishYear: data[key].publishYear
        });
      }
      */
      setBooks(data);

    } catch(err){
      setError(err.message);
    }

    setIsLoading(false);
  },[URL]);
  /*
  const fetchBooksHandler = useCallback(async(query) => {
    if (!query.trim())
      return;
    
    setIsLoading(true);
    setError(null);
    
    try{
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`);

      if (!response.ok){
        throw new Error(`Error! Status: ${response.status}`);
      }

      const data = await response.json();

      const transformedData = data.docs.map((bookData) => {
        return{
          id: bookData.key,
          title: bookData.title,
          author: bookData.author_name,
          publishYear: bookData.first_publish_year
        }
      });
      console.log("Loaded")
      setBooks(transformedData);
    } catch(e){
      setError(e.message);
    }
    setIsLoading(false);
  }, []);
  */
  /*
  function fetchBooksHandler() {
    fetch("https://openlibrary.org/search.json?q=fiction&limit=10").then(
      (response) => {
        return response.json();
      }
    ).then(
      (data) => {
        console.log(data.docs);
        const transformedData = data.docs.map((bookData) => {
          return{
            id: bookData.key,
            title: bookData.title,
            author: bookData.author_name,
            publishYear: bookData.first_publish_year
          }
        });

      }
    )
    
  }
  */

  // TODO: Complete addBookHandler
  async function addBookHandler(book) {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(book),
        header: {
          'Content-Type': 'application/json', 
        }
      });

      if(!response.ok){
          throw new Error('Failed to save.');
        }

      fetchBooksHandler();

    } catch(err){
      setError(err.message);
    }

    setIsLoading(false);
  }

  
  useEffect(() => {
    console.log("Loaded")
    fetchBooksHandler("");
  }, [fetchBooksHandler]);

  function searchInputChangeHandler(event) {
    setSearchTerm(event.target.value);
  }

  function submitHandler(event){
    console.log("submit handled")
    event.preventDefault();
    fetchBooksHandler(searchTerm);
  }

  let content = <p>No books found.</p>;

  if (books.length > 0) {
    content = <BookList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading books...</p>;
  }

  //onClick={fetchBooksHandler}
  return (
    <main className="container">
      <section>
        <h2>Add New Book</h2>
        <AddBook onAddBook={addBookHandler} />
      </section>

      <section>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            value={searchTerm} 
            onChange={searchInputChangeHandler} 
            placeholder ="Search..."
          />
          <br/><br/>
          <button type="submit" >Fetch Books</button>
        </form>
      </section>

      <section>{content}</section>
    </main>
  );
}

export default App;