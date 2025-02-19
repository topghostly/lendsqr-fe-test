import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/components/dashboard/pagination.module.scss";
import { useUsers } from "@/hooks/users";

const Pagination = () => {
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
  } = useUsers();
  const [final, setFinal] = useState<number[]>([]);
  const [initial, setInitial] = useState<number[]>([]);

  useEffect(() => {
    setFinal([totalPages - 1, totalPages]);
  }, [totalPages]);

  useEffect(() => {
    if (currentPage === 1) {
      setInitial([currentPage, currentPage + 1, currentPage + 2]);
    } else if (currentPage === totalPages - 2) {
      setInitial([currentPage - 2, currentPage - 1, currentPage]);
    } else if (currentPage === totalPages - 1) {
      setInitial([currentPage - 3, currentPage - 2, currentPage - 1]);
    } else if (currentPage === totalPages) {
      setInitial([currentPage - 4, currentPage - 3, currentPage - 2]);
    } else {
      setInitial([currentPage - 1, currentPage, currentPage + 1]);
    }
  }, [currentPage, totalPages]);

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
        <button
          className={styles.navButton}
          onClick={() => {
            if (currentPage <= 1) return setCurrentPage(1);
            setCurrentPage((prev: number) => prev - 1);
          }}
        >
          {"<"}
        </button>
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
        <button
          className={styles.navButton}
          onClick={() => {
            console.log("Total page: ", totalPages);
            if (currentPage >= totalPages) return setCurrentPage(totalPages);
            setCurrentPage((prev: number) => prev + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
