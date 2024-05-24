import PropTypes from "prop-types";
import { useState } from "react";

const ToDoform = ({ addToDo }) => {
  const [value, setValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Profissional", "Pessoal", "Acadêmico"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !selectedCategory) return;
    addToDo(value, selectedCategory);
    setValue("");
    setSelectedCategory("");
  };

  return (
    <div className="toDo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

ToDoform.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default ToDoform;
