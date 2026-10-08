import { useRef } from 'react';
import styles from './AddBook.module.css';

function AddBook(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const publishYearInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const book = {
      title: titleInputRef.current.value,
      author: authorInputRef.current.value,
      publishYear: publishYearInputRef.current.value,
    };

    props.onAddBook(book);

    titleInputRef.current.value = '';
    authorInputRef.current.value = '';
    publishYearInputRef.current.value = '';
  }

  return (
    <form onSubmit={submitHandler} className={styles['add-book-form', 'container']}>
      <div className={styles['form-group']}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleInputRef} required />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" ref={authorInputRef} required />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="publishYear">Publish Year</label>
        <input type="text" id="publishYear" ref={publishYearInputRef} required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;