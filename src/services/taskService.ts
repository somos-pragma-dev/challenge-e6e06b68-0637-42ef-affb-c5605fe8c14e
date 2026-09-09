import { taskApi } from '../api/taskApi';
import { Task } from '../models/task';

export const taskService = {
  getTasks: async (): Promise<Task[]> => {
    return taskApi.getTasks();
  },
  addTask: async (task: Task) => {
    await taskApi.addTask(task);
  },
  updateTask: async (task: Task) => {
    await taskApi.updateTask(task);
  },
  deleteTask: async (id: number) => {
    await taskApi.deleteTask(id);
  }
};