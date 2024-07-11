import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import { Context } from "../context/Context";

const Add = () => {
  const { handleSubmit, newTaskContent,setNewTaskContent } = useContext(Context);
  return (
    <div className="add">
      <h2>Add new task:</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="newTask"
          type="text"
          required
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
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
