import React, { useState } from "react";

export default function TaskItem({
  task,
  onDeleteTask,
  onUpdateTask,
  onUpdateTaskStatus,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleUpdate = () => {
    onUpdateTask(task.id, newName);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleUpdate}>Sauvegarder</button>
        </div>
      ) : (
        <div>
          <span>{task.name}</span>
          <span> - {task.status}</span>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
          <select
            value={task.status}
            onChange={(e) => onUpdateTaskStatus(task.id, e.target.value)}
            className="second"
          >
            <option value="Planifié">Planifié</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
      )}
    </li>
  );
}
