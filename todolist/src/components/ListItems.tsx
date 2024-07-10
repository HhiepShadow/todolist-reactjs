import { Task } from "../models/Task";
import ItemLine from "./ItemLine";

const ListItems = ({
  items,
  handleDelete,
}: {
  items: Task[];
  handleDelete: (id: number) => void;
}) => {
  return (
    <div className="list-items">
      <div className="list-header">Task List</div>
      <ul>
        {items.map((item: Task) => (
          <ItemLine item={item} key={item.id} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
