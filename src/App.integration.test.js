import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Click-me", completed: false },
  ];

it('renders welcome message', () => {
  render(<App tasks={DATA} />);
  expect(screen.getByText('TodoMatic')).toBeInTheDocument();
});



it('tick checkbox when click', () => {
  render(<App tasks={DATA} />);
  const checkbox = screen.getByRole("checkbox", { name: "Click-me" });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});