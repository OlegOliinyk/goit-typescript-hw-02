import React from "react";
import { PuffLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div>
      <PuffLoader className={styles.loaderPuff} color="#3B82F6" size={60} />
    </div>
  );
};

export default Loader;
