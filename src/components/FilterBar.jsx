import styles from "./Components.module.css";

function FilterBar({ itemsLeft, filter, onFilterChange, onClearCompleted }) {
  return (
    <div className={styles.filterBar}>
      <span className={styles.itemsLeft}>{itemsLeft} items left</span>
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filter === "all" ? styles.filterActive : ""}`}
          type="button"
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "active" ? styles.filterActive : ""}`}
          type="button"
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`${styles.filterBtn} ${filter === "completed" ? styles.filterActive : ""}`}
          type="button"
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
      <button className={styles.clearBtn} type="button" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default FilterBar;
