import React from "react";
import styles from "./Components.module.css";

function TaskItem({ task, onToggleTask }) {
  return (
    <div className={styles.taskItem}>
      <button
        className={`${styles.circle} ${task.completed ? styles.circleDone : ""}`}
        type="button"
        onClick={() => onToggleTask(task.id)}
        aria-label={`Toggle ${task.title}`}
      >
        {task.completed ? "✓" : ""}
      </button>
      <p className={`${styles.taskText} ${task.completed ? styles.taskTextDone : ""}`}>{task.title}</p>
    </div>
  );
}

export default TaskItem;
