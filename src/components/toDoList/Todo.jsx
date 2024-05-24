import PropTypes from "prop-types";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        backgroundColor: todo.isCompleted ? "rgba(0, 0, 0, 0.1 " : "",
      }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todo;
