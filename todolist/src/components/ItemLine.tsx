import { Task } from "../models/Task";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
//import useStyles from '../styles/useStyles'

const ItemLine = ({
  item,
  handleDelete,
}: {
  item: Task;
  handleDelete: (id: number) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="item">
      <div className="item-content">{item.content}</div>
      <div className="list-btns">
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => navigate(`/${item.id}`)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ItemLine;
