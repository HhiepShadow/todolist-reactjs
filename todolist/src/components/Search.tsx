import { useContext } from "react";
import { TextField } from "@mui/material";
import { Context } from "../context/Context";

const Search = () => {
  const { search, setSearch } = useContext(Context);
  return (
    <div className="search">
      <TextField
        fullWidth
        style={{
          margin: "5px auto",
        }}
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
