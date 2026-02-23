import { useState } from "react";
import styles from "./Components.module.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    onAddTask(cleanTitle);
    setTitle("");
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <div className={styles.taskFormCircle} />
      <input
        className={styles.taskFormInput}
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default TaskForm;
