import React, { createContext, useContext, useState } from 'react';
import { taskApi } from '../api/taskApi';
import { Task } from '../models/task';

interface TaskContextProps {
  tasks: Task[];
  loadTasks: () => void;
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskContextProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const fetchedTasks = await taskApi.getTasks();
    setTasks(fetchedTasks);
  };

  const addTask = (task: Task) => {
    taskApi.addTask(task);
    setTasks([...tasks, task]);
  };

  const updateTask = (task: Task) => {
    taskApi.updateTask(task);
    setTasks(tasks.map(t => t.id === task.id? task : t));
  };

  const deleteTask = (id: number) => {
    taskApi.deleteTask(id);
    setTasks(tasks.filter(task => task.id!== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext debe ser usado dentro de un TaskContextProvider');
  }
  return context;
};