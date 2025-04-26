import React from "react";
import styles from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <p className={styles.errorMessage}>{message}</p>;
};

export default ErrorMessage;
