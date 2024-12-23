import React from "react";

export default function TaskFilter({
  searchTerm,
  setSearchTerm,
  filterStatus,
  setFilterStatus,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher une tâche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="first"
      >
        <option value="">Tous</option>
        <option value="Planifié">Planifié</option>
        <option value="En cours">En cours</option>
        <option value="Terminé">Terminé</option>
      </select>
    </div>
  );
}
