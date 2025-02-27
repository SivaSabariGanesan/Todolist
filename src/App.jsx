import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: task, completed: false },
      ]);
      setTask(''); // Clear input field
    }
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">To-Do List</h1>

        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            className="task-input"
            placeholder="Enter a task"
          />
          <button onClick={handleAddTask} className="add-btn">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
                className="checkbox"
              />
              <span className="task-text">{task.text}</span>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
