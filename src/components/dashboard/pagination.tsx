import React, { useMemo } from "react";
import styles from "../../styles/components/dashboard/pagination.module.scss";
import { useUsers } from "@/hooks/users";
import Image from "next/image";

const Pagination = () => {
  const {
    currentPage,
    totalPages,
    setCurrentPage,
    itemsPerPage,
    setItemsPerPage,
    totalUsers,
  } = useUsers()!;

  const final = useMemo(
    () => (totalPages <= 3 ? [] : [totalPages - 1, totalPages]),
    [totalPages]
  );

  const initial = useMemo(() => {
    if (totalPages <= 3)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 2) return [1, 2, 3];
    if (currentPage >= totalPages - 1)
      return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  }, [currentPage, totalPages]);

  const pageNumberList = [...initial, ...final];

  console.log(pageNumberList);
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
        <span>out of {totalUsers}</span>
      </div>

      {currentPage && totalPages ? (
        <div className={styles.pagination}>
          <button
            className={`${styles.navButton} ${
              currentPage === initial[0] ? styles.disable : ""
            }`}
            onClick={() => {
              if (currentPage <= 1) return setCurrentPage(1);
              setCurrentPage((prev: number) => prev - 1);
            }}
          >
            <Image
              src={"/images/prev.svg"}
              alt="prev icon"
              width={12}
              height={12}
              priority
            />
          </button>
          {initial.map((num) => (
            <button
              key={num}
              className={`${styles.pageNumber} ${
                currentPage === num ? styles.active_page : null
              }`}
              onClick={() => {
                if (totalPages >= num) {
                  setCurrentPage(num);
                }
              }}
            >
              {num}
            </button>
          ))}
          {totalPages >= 3 ? <span className={styles.dots}>...</span> : null}
          {final.map((num) => (
            <button
              key={num}
              className={`${styles.pageNumber} ${
                currentPage === num ? styles.active_page : null
              } `}
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}
            </button>
          ))}
          <button
            className={`${styles.navButton} ${
              pageNumberList.length <= 1 ||
              currentPage === pageNumberList.at(-1)
                ? styles.disable
                : ""
            }`}
            onClick={() => {
              console.log("Total page: ", totalPages);
              if (currentPage >= totalPages) return setCurrentPage(totalPages);
              setCurrentPage((prev: number) => prev + 1);
            }}
          >
            <Image
              src={"/images/next.svg"}
              alt="next icon"
              width={12}
              height={12}
              priority
            />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
