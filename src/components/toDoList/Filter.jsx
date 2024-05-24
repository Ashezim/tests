import PropTypes from "prop-types";

const Filter = ({ filter, setFilter, setSort }) => {
  const status = ["Todas", "Completas", "Incompletas"];

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select
            id="filterSelect"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {status.map((status) => (
              <option key={status} value={status}>
                {status}
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
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Filter;
