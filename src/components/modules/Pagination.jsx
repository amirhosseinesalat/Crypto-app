import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const perviousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 5) return;
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.pagination}>
      <button
        onClick={perviousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        Pervious
      </button>
      <p className={page === 1 ? styles.selected : null}>1</p>
      <p className={page === 2 ? styles.selected : null}>2</p>

      {page > 2 && page < 4 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 4 ? styles.selected : null}>4</p>
      <p className={page === 5 ? styles.selected : null}>5</p>
      <button
        onClick={nextHandler}
        className={page === 5 ? styles.disabled : null}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
