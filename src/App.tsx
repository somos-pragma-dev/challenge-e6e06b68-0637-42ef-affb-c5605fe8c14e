import React from 'react';
import { TaskContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
};

export default App;