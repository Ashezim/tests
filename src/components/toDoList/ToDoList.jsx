import Search from "./Search";
import Filter from "./Filter";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { useState } from "react";

const ToDoList = () => {
  const [toDos, setToDos] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      text: "Implementar mais funcionalidades neste site",
      category: "Profissional",
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: "Estudar react",
      category: "Acadêmico",
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: "Cantar",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todas");
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [sort, setSort] = useState("ASC");

  const removeToDo = (id) => {
    const newToDos = [...toDos];
    const filteredToDo = newToDos.filter((toDos) =>
      toDos.id !== id ? toDos : null
    );

    setToDos(filteredToDo);
  };

  const addToDo = (text, category) => {
    const newToDos = [
      ...toDos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setToDos(newToDos);
  };

  const completeToDo = (id) => {
    const newToDos = [...toDos];
    newToDos.map((toDo) =>
      toDo.id === id ? (toDo.isCompleted = !toDo.isCompleted) : toDo
    );

    setToDos(newToDos);
  };

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Filter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        setSort={setSort}
      />
      <ToDo
        toDos={toDos}
        sort={sort}
        search={search}
        statusFilter={statusFilter}
        categoryFilter={categoryFilter}
        removeToDo={removeToDo}
        completeToDo={completeToDo}
      />
      <ToDoForm addToDo={addToDo} />
    </div>
  );
};

export default ToDoList;
