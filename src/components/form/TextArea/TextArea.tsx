import React from "react";
import { TextAreaProps } from "./TextArea.types";
import styles from "./TextArea.module.css";

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  label,
  labelClass = "",
  onChange,
  placeholder,
  disabled = false,
  textareaClass = "",
}) => (
  <div className={styles.container}>
    {label && (
      <label className={`${styles.label} ${labelClass}`} htmlFor={id}>
        {label}
      </label>
    )}
    <textarea
      id={id}
      className={`${styles.textarea} ${textareaClass} ${disabled ? styles.disabled : ""}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      rows={5}
    />
  </div>
);
