import React, { useState } from "react";
import { PassportUploadProps } from "./PassportUpload.types";
import styles from "./PassportUpload.module.css";

export const PassportUpload: React.FC<PassportUploadProps> = ({
  label,
  name,
  acceptedFileTypes = "image/*", // Accept any image type
  onChange,
  error,
  disabled = false,
  containerClass = "",
  labelClass = "",
  inputClass = "",
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null); // Use File type for selected file
  const [filePreview, setFilePreview] = useState<string>("");

  // Handle file drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange(files[0]);
    }
  };

  // Handle file change for drag and drop or file input
  const handleFileChange = (selectedFile: File) => {
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
      if (onChange) {
        onChange(selectedFile);
      }
    }
  };

  // Handle drag over state
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  // Handle drag leave event
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

  // Remove selected file and reset preview
  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview("");
    if (onChange) {
      onChange(null); // Reset the parent component's state
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
        {/* Label to make the dropzone clickable for file input */}
        <label htmlFor={name} className={`${styles.labelClickable}`}>
          {file ? (
            <p className={styles.fileName}>{file.name}</p>
          ) : (
            <p className={styles.placeholderText}>
              Drag & drop your passport image here, or click to select a file.
            </p>
          )}
        </label>
        <input
          id={name}
          type="file"
          name={name}
          accept={acceptedFileTypes}
          onChange={handleFileInputChange}
          className={`${styles.input} ${inputClass}`}
          disabled={disabled}
        />
      </div>
      {/* Preview the uploaded file if available */}
      {filePreview && (
        <div className={styles.previewContainer}>
          <img src={filePreview} alt="Preview" className={styles.previewImage} />
          <button
            type="button"
            onClick={handleRemoveFile}
            className={styles.removeButton}
          >
            Remove
          </button>
        </div>
      )}
      {/* Display error message if provided */}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
