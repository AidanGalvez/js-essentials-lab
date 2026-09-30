import { useState, useRef } from 'react';
import ErrorModal from './ErrorModal';

const UserForm = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  //const [username, setUsername] = useState('');
  //const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    // console.log(usernameInputRef);
    event.preventDefault();


    const enteredUsername = usernameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age.',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";

  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <div className="card">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={usernameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
