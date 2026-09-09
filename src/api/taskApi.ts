import axios from 'axios';
import { Task } from '../models/task';

const taskApi = {
  getTasks: async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  },
  addTask: async (task: Task) => {
    await axios.post('https://jsonplaceholder.typicode.com/todos', task);
  },
  updateTask: async (task: Task) => {
    await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);
  },
  deleteTask: async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
};

export { taskApi };