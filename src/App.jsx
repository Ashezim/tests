import { useState } from "react";
import "./App.css";

import NavBar from "./components/layouts/NavBar";
import ToDoList from "./components/toDoList/ToDoList";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <NavBar setPage={setPage} />
      <div className="app">
        {page === "Home" ? (
          <div>
            <h1>
              O objetivo deste site é aplicar os conhecimentos adquiridos
              durantes os estudos.
            </h1>
          </div>
        ) : page === "ToDoList" ? (
          <ToDoList />
        ) : null}
      </div>
    </div>
  );
}

export default App;
