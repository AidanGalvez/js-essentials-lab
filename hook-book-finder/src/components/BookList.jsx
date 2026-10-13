import Book from './Book';
import styles from './BookList.module.css';

const BookList = (props) => {
  return (
    <ul className={styles['books-list']}>
      {props.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          publishYear={book.publishYear}
        />
      ))}
    </ul>
  );
};

export default BookList;