import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../models/task';

interface TaskFormProps {
  task?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  const { addTask, updateTask } = useTaskContext();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      updateTask({...task, title, description });
    } else {
      addTask({ id: Date.now(), title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TaskForm;