import { Task } from "../models/Task";

const initialTask = (): Task[] => {
  let initialValue: Task[] = [];
  const storedTasks = localStorage.getItem("listTasks");
  if (storedTasks) {
    initialValue = [...JSON.parse(storedTasks)];
  }
  return initialValue;
};

export default initialTask;
