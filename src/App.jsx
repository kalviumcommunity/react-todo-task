import { useState } from "react";

const initialTasks = [
  { id: 1, text: "Learn JSX", done: true },
  { id: 2, text: "Understand props", done: false },
  { id: 3, text: "Practice useState", done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // TODO 3: write a function that toggles `done` for the task with the given id.
  // Do not change the array directly. Create a new array and call setTasks.
  const toggleTaskDone = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      {/* TODO 4 (stretch): show "X of Y done" here, e.g. "1 of 3 done" */}
      <h1>My Tasks</h1>

      <p> {tasks.filter((task) => task.done).length} of {tasks.length} done </p>

      <ul>
        {/* TODO 1: render every task as an <li> using tasks.map().
            Show task.text. Don't forget the key. */}
        {tasks.map((task) => (
          <li key={task.id}>
            {task.done ? "✅" : "⬜"} {task.text}
            <button onClick={() => toggleTaskDone(task.id)}>Mark done</button>
          </li>
        ))}

        {/* TODO 2: before the text, show "✅" if task.done is true, otherwise "⬜". */}

        {/* TODO 3: add a button with the text "Mark done" inside each <li>.
            Clicking it should toggle that task's `done` value. */}
      </ul>
    </div>
  );
}

export default App;
