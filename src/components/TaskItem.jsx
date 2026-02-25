import React from "react";
import styles from "./Components.module.css";

function TaskItem({ task, onToggleTask, theme }) {
  const isLight = theme === "light";

  return (
    <div className={`${styles.taskItem} ${isLight ? styles.taskItemLight : styles.taskItemDark}`}>
      <button
        className={`${styles.circle} ${isLight ? styles.circleLight : styles.circleDark} ${
          task.completed ? styles.circleDone : ""
        }`}
        type="button"
        onClick={() => onToggleTask(task.id)}
        aria-label={`Toggle ${task.title}`}
      >
        {task.completed ? "✓" : ""}
      </button>
      <p
        className={`${styles.taskText} ${isLight ? styles.taskTextLight : styles.taskTextDark} ${
          task.completed ? styles.taskTextDone : ""
        }`}
      >
        {task.title}
      </p>
    </div>
  );
}

export default TaskItem;
