import { useState } from "react";
import useHttp from "../hooks/useHttp";

const TaskForm = (props) => {
  const [enteredText, setEnteredText] = useState("");
   const { isLoading, error, sendRequest: enterTaskHandler} = useHttp();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!enteredText.trim()) 
      return;

    const handleTaskAdded = (createdTask) => {
      props.onAddTask(createdTask);
      setEnteredText("");
    }

    enterTaskHandler("http://localhost:3000/tasks",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { text: enteredText },
    },
    handleTaskAdded
    );
  };

  return (
    <section className="card">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={enteredText}
          onChange={(e) => setEnteredText(e.target.value)}
          placeholder="Enter task..."
        />
        <button disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Task"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
};

export default TaskForm;