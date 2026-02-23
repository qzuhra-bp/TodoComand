import React, { useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import styles from "./Home.module.css";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import { db } from "../firebase/firbase";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((task) => !task.completed);
    if (filter === "completed") return tasks.filter((task) => task.completed);
    return tasks;
  }, [tasks, filter]);

  const itemsLeft = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks]
  );

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const nextTasks = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setTasks(nextTasks);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTask = async (title) => {
    await addDoc(collection(db, "tasks"), {
      title,
      completed: false,
      createdAt: serverTimestamp(),
    });
  };

  const handleToggleTask = async (id) => {
    const current = tasks.find((task) => task.id === id);
    if (!current) return;
    await updateDoc(doc(db, "tasks", id), {
      completed: !current.completed,
    });
  };

  const handleClearCompleted = async () => {
    const completedTasks = tasks.filter((task) => task.completed);
    await Promise.all(
      completedTasks.map((task) => deleteDoc(doc(db, "tasks", task.id)))
    );
  };

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>TODO</h1>
          <button className={styles.themeBtn}>☀</button>
        </div>
      </div>

      <div className={styles.content}>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={visibleTasks} onToggleTask={handleToggleTask} />
        <FilterBar
          itemsLeft={itemsLeft}
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={handleClearCompleted}
        />
        <p className={styles.hint}>Drag and drop to reorder list</p>
      </div>
    </main>
  );
}

export default Home;
