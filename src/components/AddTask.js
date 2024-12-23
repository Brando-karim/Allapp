import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;
    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
