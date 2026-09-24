import { useState } from 'react';
import TodoInput from './components/TodoInput';
import styles from './App.module.css';

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 't1', text: 'Finish homework' },
    { id: 't2', text: 'Go on a hike' }
  ]);

  const addTodoHandler = enteredText => {
    setTodoItems(prevTodos => [
      { id: Math.random().toString(), text: enteredText },
      ...prevTodos
    ]);
  };

  const deleteItemHandler = todoId => {
    setTodoItems(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className={styles["app-container"]}>
      <section className ={styles["todo-form"]}>
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section className ={styles.todos}>
        <ul>
          {todoItems.map(todo => (
            <li className = {styles.li} key={todo.id} onClick={() => deleteItemHandler(todo.id)}>
              {todo.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;