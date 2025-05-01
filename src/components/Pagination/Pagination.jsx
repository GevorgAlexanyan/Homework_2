import React from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({ page, total, handleClick }) => {
  return (
    <div className={`contianer ${styles.pagination} `}>
      {[...Array(total)].map((_, i) => (
        <button onClick={() => handleClick(i + 1)} className={page === i + 1 ? styles.sel : ''} key={i} >{i + 1}</button>
      ))}
    </div>
  );
};
