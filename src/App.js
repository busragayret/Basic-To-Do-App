import React, { useState } from 'react';
import './style.css';
import TodoItem from './components/ToDoItem';

const todoItems = [
  { id: 1, title: 'Workout🏋', isCompleted: true },
  { id: 2, title: 'Save Money💸', isCompleted: false },
  { id: 3, title: 'Read a book📚', isCompleted: true },
  { id: 4, title: 'Drink Water🍶', isCompleted: false },
  { id: 5, title: 'Learning🎯', isCompleted: true },
  { id: 6, title: 'Call Parents👪', isCompleted: false },
  { id: 7, title: 'Eat Vege🌱', isCompleted: true },
  { id: 8, title: 'Eat Fruits🍉', isCompleted: false },
];

export default function App() {
  const [toDo, setToDo] = useState(todoItems);
  function formHandlerSubmit(event) {
    event.preventDefault();
    if (!!event.target[0].value) {
      const item = {
        id: toDo.length + 1,
        title: event.target[0].value,
        isCompleted: false,
      };

      setToDo([item, ...toDo]);
      event.target[0].value = '';
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <form className="mb-3" onSubmit={formHandlerSubmit}>
            <div className="mb-3">
              <br />
              <label htmlFor="todoItem" className="form-label">
                📋 My To-Do List :
              </label>
              <input
                name="todoItem"
                type="text"
                className="form-control"
                id="todoItem"
                placeholder="enter your to-do..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
          <ul className="list-group">
            {toDo.map((item) => (
              <TodoItem item={item} hi="hi" />
            ))}
          </ul>
          <br />
          <label htmlFor="todoItem" className="form-label">
            🏆 "A goal without a plan is just a wish." 🏆
          </label>
        </div>
      </div>
    </div>
  );
}
