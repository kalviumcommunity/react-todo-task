import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Learn JSX", done: true },
  { id: 2, text: "Understand props", done: false },
  { id: 3, text: "Practice useState", done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskDone = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const doneCount = tasks.filter((task) => task.done).length;

  return (
    <div>
      <p>
        {doneCount} of {tasks.length} done
      </p>
      <h1>My Tasks</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.done ? "✅" : "⬜"} {task.text}
            <button type="button" onClick={() => toggleTaskDone(task.id)}>
              Mark done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
