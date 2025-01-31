import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Practice daily", completed: false },
    { id: 4, text: "Workout everyday", completed: false },
    { id: 5, text: "Play music daily", completed: false },
    { id: 6, text: "Develop positive habits", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />{" "}
            </label>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
