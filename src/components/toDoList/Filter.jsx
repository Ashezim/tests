import PropTypes from "prop-types";

const Filter = ({
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter,
  setSort,
}) => {
  const status = ["Todas", "Completas", "Incompletas"];
  const categories = ["Todas", "Profissional", "Pessoal", "Acadêmico"];

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select
            id="statusSelect"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Categoria:</p>
          <select
            id="categorySelect"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((categories) => (
              <option key={categories} value={categories}>
                {categories}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Ordem alfabética:</p>
          <button onClick={() => setSort("ASC")}>Ascendente</button>
          <button onClick={() => setSort("DESC")}>Descendente</button>
        </div>
        <p></p>
      </div>
    </div>
  );
};

Filter.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  setStatusFilter: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Filter;
