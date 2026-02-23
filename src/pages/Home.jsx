import React from 'react'
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>TODO</h1>
          <button className={styles.themeBtn}>☀</button>
        </div>
      </div>

      <div className={styles.content}>
        {/* TaskForm */}
        {/* TaskList */}
      </div>
    </main>
  );
}

export default Home
