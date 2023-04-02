import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Brea's Planner App</h1>
      </header>
      <main>
        <h2>Calendar </h2>
          <div className="calender-container">
                 <Calendar />
          </div>
        <h2>To Do List</h2>
          <div className="todo-list">
                  <Todo />
          </div>
      </main>
      <footer>
        <p>&copy; 2023 Brea's Planner App</p>
      </footer>
    </div>
  );
}

export default App;
