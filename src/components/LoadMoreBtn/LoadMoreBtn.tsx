import React from "react";
import styles from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.loadMoreBtnDiv}>
      <button onClick={onClick} className={styles.loadMoreButton}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
