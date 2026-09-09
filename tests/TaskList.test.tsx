import React from 'react';
import { render } from '@testing-library/react';
import TaskList from '../src/components/TaskList';

test('renders TaskList component', () => {
  render(<TaskList />);
});