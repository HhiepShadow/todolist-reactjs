import { Button, TextField } from "@mui/material";
import { Dispatch, FormEventHandler, SetStateAction } from "react";

const Add = ({
  handleSubmit,
  newTask,
  setNewTask,
}: {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  newTask: string;
  setNewTask: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="add">
      <h2>Add new task:</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="newTask"
          type="text"
          required
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="success"
          style={{
            marginTop: "10px",
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default Add;
