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

  return (
    <div>
      {/* TODO 4 (stretch): show "X of Y done" here, e.g. "1 of 3 done" */}
      <h1>My Tasks</h1>

      <ul>
        {/* TODO 1: render every task as an <li> using tasks.map().
            Show task.text. Don't forget the key. */}

        {/* TODO 2: before the text, show "✅" if task.done is true, otherwise "⬜". */}

        {/* TODO 3: add a button with the text "Mark done" inside each <li>.
            Clicking it should toggle that task's `done` value. */}
      </ul>
    </div>
  );
}

export default App;
