import React from "react";
import styles from "./Components.module.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask }) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} />
      ))}
    </div>
  );
}

export default TaskList;
