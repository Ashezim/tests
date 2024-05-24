import PropTypes from "prop-types";

const ToDo = ({
  toDos,
  sort,
  search,
  statusFilter,
  categoryFilter,
  removeToDo,
  completeToDo,
}) => {
  const mappedToDos = toDos
    .filter((toDo) =>
      statusFilter === "Todas"
        ? true
        : statusFilter === "Completas"
        ? toDo.isCompleted
        : !toDo.isCompleted
    )
    .filter((toDo) =>
      categoryFilter === "Todas"
        ? true
        : categoryFilter === "Profissional"
        ? toDo.category.toLowerCase().includes(categoryFilter.toLowerCase())
        : categoryFilter === "Pessoal"
        ? toDo.category.toLowerCase().includes(categoryFilter.toLowerCase())
        : toDo.category.toLowerCase().includes(categoryFilter.toLowerCase())
    )
    .filter(
      (toDo) =>
        toDo.text.toLowerCase().includes(search.toLowerCase()) ||
        toDo.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "ASC"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
    );

  return (
    <div className="toDo-list">
      {mappedToDos.length > 0 ? (
        mappedToDos.map((toDo) => (
          <div
            key={toDo.id}
            className="toDo"
            style={{
              textDecoration: toDo.isCompleted ? "line-through" : "",
              backgroundColor: toDo.isCompleted ? "rgba(0, 0, 0, 0.1 " : "",
            }}
          >
            <div className="content">
              <p>{toDo.text}</p>
              <p className="category">({toDo.category})</p>
            </div>
            <div>
              <button
                className="complete"
                onClick={() => completeToDo(toDo.id)}
              >
                Finalizar
              </button>
              <button className="remove" onClick={() => removeToDo(toDo.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3>Não há tarefas</h3>
        </div>
      )}
    </div>
  );
};

ToDo.propTypes = {
  toDos: PropTypes.array.isRequired,
  sort: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  statusFilter: PropTypes.string.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  removeToDo: PropTypes.func.isRequired,
  completeToDo: PropTypes.func.isRequired,
};

export default ToDo;
