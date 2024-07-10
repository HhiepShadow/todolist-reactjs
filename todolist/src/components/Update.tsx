import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import { Task } from "../models/Task";

const Update = ({
  tasks,
  handleUpdate,
  updatedTask,
  setUpdatedTask,
}: {
  tasks: Task[];
  handleUpdate: (id: number) => void;
  updatedTask: string;
  setUpdatedTask: Dispatch<SetStateAction<string>>;
}) => {
  const { id } = useParams();
  const task: Task | undefined = tasks.find(
    (task) => task.id.toString() === id
  );

  return (
    <div className="add">
      <h2>Update task:</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          fullWidth
          id="newTask"
          type="text"
          required
          value={updatedTask}
          placeholder={task && task.content}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="warning"
          style={{
            marginTop: "10px",
          }}
          onClick={() => task && handleUpdate(task.id)}
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default Update;
