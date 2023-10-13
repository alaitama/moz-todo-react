import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];

it('renders welcome message', () => {
  render(<App tasks={DATA} />);
  expect(screen.getByText('TodoMatic')).toBeInTheDocument();
});