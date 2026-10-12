import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);
  
  const { isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
    const handleTransformTasks = (tasksData) => {
      setTasks(tasksData);
    }

    fetchTasks("http://localhost:3000/tasks", {}, handleTransformTasks)

  }, [fetchTasks]);

  const addTaskHandler = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <main>
      <TaskForm onAddTask={addTaskHandler} />

      <section className="card">
        <h2>Tasks</h2>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && tasks.length === 0 && (
          <p>No tasks found. Add one above!</p>
        )}

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;