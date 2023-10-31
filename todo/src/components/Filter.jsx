import React from 'react';

const Filter = ({ filter, setFilter, sort, setSort }) => {
  const handleSort = (order) => {
    // Lógica para definir a ordem (Ascendente ou Descendente)
    setSort(order);
    // Aqui você precisará atualizar o estado 'todos' no componente pai com base na ordem selecionada
  };

  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
      </div>
      <div>
        <p>Ordem alfabética:</p>
        <button onClick={() => handleSort('Asc')} disabled={sort === 'Asc'}>
          Asc
        </button>
        <button onClick={() => handleSort('Desc')} disabled={sort === 'Desc'}>
          Desc
        </button>
      </div>
    </div>
  );
};

export default Filter;
