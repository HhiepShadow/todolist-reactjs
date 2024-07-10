import { Dispatch, SetStateAction } from "react";
import Search from "./Search";
import ListItems from "./ListItems";
import BottomBtns from "./BottomBtns";
import { Task } from "../models/Task";

const Home = ({
  items,
  search,
  setSearch,
  handleDelete,
  handleClear,
}: {
  items: Task[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  handleDelete: (id: number) => void;
  handleClear: () => void;
}) => {
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <ListItems items={items} handleDelete={handleDelete} />
      <BottomBtns handleClear={handleClear} />
    </>
  );
};

export default Home;
