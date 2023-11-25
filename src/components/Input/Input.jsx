import React from "react";
import styles from "./style.module.css";

const Input = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}) => {
    
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label && label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
