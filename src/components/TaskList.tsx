import React, { useEffect, useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskDetail from './TaskDetail';
import TaskForm from './TaskForm';

const TaskList: React.FC = () => {
  const { tasks, loadTasks } = useTaskContext();
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <TaskDetail task={task} />
            <TaskForm task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;