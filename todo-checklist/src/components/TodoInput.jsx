import { useState } from 'react';
import Button from './Button';
//import styled from 'styled-components';
//import './TodoInput.css';
import styles from './TodoInput.module.css'
/*
const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.$invalid ? "red" : "#ccc")};
  background-color: ${props => (props.$invalid ? "salmon" : "transparent")};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  border-color: #492365;
}

&.invalid input {
  border-color:red;
  background-color: salmon;
}

&.invalid label{
  color: red;
}
`;
*/
const TodoInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const todoInputChangeHandler = event => {
    if (event.target.value.trim().length > 0)
      setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className = {`${styles["form-control"]} ${isValid ? "" : styles.invalid}`}>
        <label /*style = {{color: isValid ? "black": "red"}}*/>Checklist Task</label>
        <input
        /*style = {{borderColor: isValid? "#ccc" : "red",
                  backgroundColor: isValid? "transparent" : "salmon"
        }}*/
          type="text"
          value={enteredValue}
          onChange={todoInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TodoInput;