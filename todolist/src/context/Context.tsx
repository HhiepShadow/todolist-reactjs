import {
  createContext,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Task } from "../models/Task";
import initialTasks from "../utils/initialTasks";
import { useNavigate } from "react-router-dom";

interface ContextType {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchResults: Task[];
  setSearchResults: Dispatch<SetStateAction<Task[]>>;
  updatedTask: string;
  setUpdatedTask: Dispatch<SetStateAction<string>>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  newTaskContent: string;
  setNewTaskContent: Dispatch<SetStateAction<string>>;
  handleUpdate: (id: number) => void;
  handleClear: () => void;
  handleDelete: (id: number) => void;
}

export const Context = createContext<ContextType>({
  tasks: [],
  setTasks: () => {},
  search: "",
  setSearch: () => {},
  searchResults: [],
  setSearchResults: () => {},
  updatedTask: "",
  setUpdatedTask: () => {},
  handleSubmit: () => {},
  newTaskContent: "",
  setNewTaskContent: () => {},
  handleUpdate: () => {},
  handleClear: () => {},
  handleDelete: () => {},
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Task[]>([]);
  const [updatedTask, setUpdatedTask] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const searchList: Task[] = tasks.filter((task) =>
      task.content.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(searchList);
  }, [search, tasks]);

  useEffect(() => {
    localStorage.setItem("listTasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (newTaskContent !== "") {
      const newTask: Task = {
        id: tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1,
        content: newTaskContent,
      };
      const newListItems: Task[] = [...tasks, newTask];
      setTasks(newListItems);
      setNewTaskContent("");
      setSearch("");
      navigate("/");
    } else {
      return;
    }
  };

  const handleDelete = (id: number): void => {
    const newListTasks: Task[] = tasks.filter((task) => task.id !== id);
    setTasks(newListTasks);
  };

  const handleClear = (): void => {
    setTasks([]);
  };

  const handleUpdate = (id: number): void => {
    const task: Task | undefined = tasks.find((task) => task.id === id);
    if (task) {
      const updateTask: Task = {
        ...task,
        content: updatedTask,
      };
      setTasks(tasks.map((task) => (task.id === id ? updateTask : task)));
      navigate("/");
    }
  };

  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
        search,
        setSearch,
        searchResults,
        setSearchResults,
        updatedTask,
        setUpdatedTask,
        handleSubmit,
        newTaskContent,
        setNewTaskContent,
        handleUpdate,
        handleClear,
        handleDelete,
      }}
    >
      {children}
    </Context.Provider>
  );
};
