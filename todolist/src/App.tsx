import "./App.css";
import Add from "./components/Add";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Update from "./components/Update";
import { Provider } from "./context/Context";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path=":id" element={<Update />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
