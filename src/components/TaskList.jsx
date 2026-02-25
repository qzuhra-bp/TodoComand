import React from "react";
import styles from "./Components.module.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, theme }) {
  const isLight = theme === "light";

  return (
    <div className={`${styles.taskList} ${isLight ? styles.taskListLight : styles.taskListDark}`}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} theme={theme} />
      ))}
    </div>
  );
}

export default TaskList;
