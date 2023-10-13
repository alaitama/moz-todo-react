import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App tasks={DATA} />, div);
});