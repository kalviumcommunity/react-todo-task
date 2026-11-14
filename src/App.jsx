
import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Learn JSX", done: true },
  { id: 2, text: "Understand props", done: false },
  { id: 3, text: "Practice useState", done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // Toggle task completion
  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  // Count completed tasks
  const completedTasks = tasks.filter((task) => task.done).length;

  return (
    <div>
      <h1>My Tasks</h1>

      <p>{completedTasks} of {tasks.length} done</p>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.done ? "✅" : "⬜"} {task.text}

            <button onClick={() => toggleTask(task.id)}>
              Mark done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
