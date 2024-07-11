import { useContext } from "react";
import Search from "./Search";
import ListItems from "./ListItems";
import BottomBtns from "./BottomBtns";
import { Context } from "../context/Context";

const Home = () => {
  const { searchResults, handleDelete, handleClear } =
    useContext(Context);

  return (
    <>
      <Search/>
      <ListItems items={searchResults} handleDelete={handleDelete} />
      <BottomBtns handleClear={handleClear} />
    </>
  );
};

export default Home;
