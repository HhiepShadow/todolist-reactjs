import { FormEventHandler, useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import { Task } from "./models/Task";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Update from "./components/Update";
import initialTasks from "./utils/initialTasks";

function App() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  console.log(tasks);

  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Task[]>([]);
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [updatedTask, setUpdatedTask] = useState<string>("");

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

  useEffect(() => {
    const searchList: Task[] = tasks.filter((task) =>
      task.content.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(searchList);
  }, [search, tasks]);

  useEffect(() => {
    localStorage.setItem("listTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              items={searchResults}
              search={search}
              setSearch={setSearch}
              handleDelete={handleDelete}
              handleClear={handleClear}
            />
          }
        />
        <Route
          path="add"
          element={
            <Add
              handleSubmit={handleSubmit}
              newTask={newTaskContent}
              setNewTask={setNewTaskContent}
            />
          }
        />
        <Route
          path=":id"
          element={
            <Update
              tasks={tasks}
              updatedTask={updatedTask}
              setUpdatedTask={setUpdatedTask}
              handleUpdate={handleUpdate}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
