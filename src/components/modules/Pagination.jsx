import { useState } from "react";

function Pagination({page , setPage}) {
 
  const perviousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };
  return (
    <div>
      <button onClick={perviousHandler}>Pervious</button>
      <p style={{ color: page === 1 ? "red" : "inherit" }}>1</p>
      <p>2</p>
      <span>...</span>
      {page > 2 && page < 10 && (
        <>
          <p>{page}</p>
          <span>...</span>
        </>
      )}
      <p>9</p>
      <p>10</p>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default Pagination;
