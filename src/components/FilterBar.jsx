import styles from "./Components.module.css";

function FilterBar({ itemsLeft, filter, onFilterChange, onClearCompleted, theme }) {
  const isLight = theme === "light";

  return (
    <div className={`${styles.filterBar} ${isLight ? styles.filterBarLight : styles.filterBarDark}`}>
      <span className={`${styles.itemsLeft} ${isLight ? styles.metaLight : styles.metaDark}`}>
        {itemsLeft} items left
      </span>
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${isLight ? styles.metaLight : styles.metaDark} ${
            filter === "all" ? styles.filterActive : ""
          }`}
          type="button"
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${isLight ? styles.metaLight : styles.metaDark} ${
            filter === "active" ? styles.filterActive : ""
          }`}
          type="button"
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`${styles.filterBtn} ${isLight ? styles.metaLight : styles.metaDark} ${
            filter === "completed" ? styles.filterActive : ""
          }`}
          type="button"
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
      <button
        className={`${styles.clearBtn} ${isLight ? styles.metaLight : styles.metaDark}`}
        type="button"
        onClick={onClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default FilterBar;
