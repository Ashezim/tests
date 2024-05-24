import "./App.css";

import NavBar from "./components/layouts/NavBar";
import ToDoList from "./components/toDoList/ToDoList";

function App() {
  return (
    <div>
      <NavBar />
      <div className="app">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
