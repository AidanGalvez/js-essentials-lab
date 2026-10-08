import styles from './Book.module.css';

const Book = (props) => {
  return (
    <li className={styles.book}>
      <h2>{props.title}</h2>
      <h3>Author: {props.author}</h3>
      <p>First Published: {props.publishYear}</p>
    </li>
  );
};

export default Book;