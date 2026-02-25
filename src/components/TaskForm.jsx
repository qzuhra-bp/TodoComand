import { useState } from "react";
import styles from "./Components.module.css";

function TaskForm({ onAddTask, theme }) {
  const [title, setTitle] = useState("");
  const isLight = theme === "light";

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    onAddTask(cleanTitle);
    setTitle("");
  };

  return (
    <form
      className={`${styles.taskForm} ${isLight ? styles.taskFormLight : styles.taskFormDark}`}
      onSubmit={handleSubmit}
    >
      <div className={`${styles.taskFormCircle} ${isLight ? styles.circleLight : styles.circleDark}`} />
      <input
        className={`${styles.taskFormInput} ${isLight ? styles.taskFormInputLight : styles.taskFormInputDark}`}
        type="text"
        placeholder="Create a new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default TaskForm;
