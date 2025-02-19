import React, { useState } from "react";
import styles from "../../styles/components/dashboard/pagination.module.scss";

const Pagination = () => {
  const [itemsPerPage, setItemsPerPage] = useState(100);
  const initial = [1, 2, 3];
  const final = [15, 16];

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.showing}>
        <span>Showing</span>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className={styles.dropdown}
        >
          {[10, 20, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span>out of 500</span>
      </div>

      <div className={styles.pagination}>
        <button className={styles.navButton}>{"<"}</button>
        {initial.map((num) => (
          <button key={num} className={styles.pageNumber}>
            {num}
          </button>
        ))}
        <span className={styles.dots}>...</span>
        {final.map((num) => (
          <button key={num} className={styles.pageNumber}>
            {num}
          </button>
        ))}
        <button className={styles.navButton}>{">"}</button>
      </div>
    </div>
  );
};

export default Pagination;
