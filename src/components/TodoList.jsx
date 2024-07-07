import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <h1 className="todo-header">Todo List</h1>
    <div className="todo-container">
      <input className="addTask"
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add Task"
      />
      <button className="todo-button-add" onClick={handleAddTask}>Add</button>
      <ul className="todo-item">
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through double 2px" : "none",
              }}
            >
              {task.text}
            </span>
            <div className="editButtonSpan">
            <button className="todo-button"
              onClick={() =>
                handleEditTask(task.id, prompt("Edit Task", task.text))
              }
            >
              Edit
            </button>
            <button className="todo-button" onClick={() => handleRemoveTask(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TodoList;
