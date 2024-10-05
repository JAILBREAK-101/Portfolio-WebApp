import React, { useState } from "react";
import { FileUploadProps } from "./FIleUpload.types";
import styles from "./FileUpload.module.css";

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  name,
  acceptedFileTypes = "*",
  onChange,
  error,
  disabled = false,
  containerClass = "",
  labelClass = "",
  inputClass = "",
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");

  // Handle file drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  // Handle file selection or drop
  const handleFileChange = (file: File) => {
    if (onChange) {
      onChange(file);
      setFileName(file.name);
    }
  };

  // Set drag over state
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  // Reset drag over state
  const handleDragLeave = () => {
    setDragOver(false);
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  return (
    <div className={`${styles.container} ${containerClass}`}>
      {label && (
        <label className={`${styles.label} ${labelClass}`} htmlFor={name}>
          {label}
        </label>
      )}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`${styles.dropzone} ${dragOver ? styles.dragOver : ""} ${
          disabled ? styles.disabled : ""
        }`}
      >
        <input
          type="file"
          name={name}
          accept={acceptedFileTypes}
          onChange={handleFileInputChange}
          className={`${styles.input} ${inputClass}`}
          disabled={disabled}
        />
        <p className={styles.text}>
          {fileName || "Drag & drop your file here, or click to select a file."}
        </p>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
