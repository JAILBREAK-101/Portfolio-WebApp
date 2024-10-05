import React from "react";
import { TextInputProps } from "./TextInput.types";
import styles from "./TextInput.module.css";

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  error,
  disabled = false,
  size = "default",
  inputClass,
  labelClass,
  containerClass
}) => {
  // Class names for different input sizes
  const sizeClasses = () => {
    switch (size) {
      case "large":
        return styles.large;
      case "small":
        return styles.small;
      default:
        return styles.defaultSize;
    }
  };

  return (
    <div className={`${styles.container} ${containerClass ?? ""}`}>
      {label && (
        <label
          htmlFor={name}
          className={`${styles.label} ${labelClass ?? ""}`}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${sizeClasses()} ${inputClass ?? ""} ${
          disabled ? styles.disabled : ""
        } ${error ? styles.error : ""}`}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
