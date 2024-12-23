import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onDeleteTask,
  onUpdateTask,
  onUpdateTaskStatus,
}) {
  return (
    <div>
      <h2>Liste des Tâches</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
            onUpdateTaskStatus={onUpdateTaskStatus}
          />
        ))}
      </ul>
    </div>
  );
}
