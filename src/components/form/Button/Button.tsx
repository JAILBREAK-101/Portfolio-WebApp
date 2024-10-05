import React from "react";
import { FaSpinner } from "react-icons/fa";
import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({
  loading,
  variant = "primary",
  disabled,
  btnClass,
  withIcon,
  body,
  type = "button",
  size = "default",
  onClick = () => {},
  title
}) => {
  const variantClasses = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "danger":
        return styles.danger;
      default:
        return styles.default;
    }
  };

  // CSS module class names based on size
  const sizeClasses = () => {
    switch (size) {
      case "large":
        return styles.large;
      case "small":
        return styles.small;
      case "xsmall":
        return styles.xsmall;
      default:
        return styles.defaultSize;
    }
  };

  // Loader size based on button size
  const loaderSize = () => {
    switch (size) {
      case "large":
        return 20;
      case "xsmall":
        return 12;
      default:
        return 15;
    }
  };

  // Loader color based on variant
  const loaderColor = () => {
    switch (variant) {
      case "primary":
        return "#ffffff";
      default:
        return "var(--text-20)";
    }
  };

  // Combine all class names
  const classes = `${styles.button} ${variantClasses()} ${sizeClasses()} ${btnClass ?? ""} ${
    disabled || loading ? styles.disabled : ""
  }`;

  // Render button icon if specified
  const buttonIcon = () => {
    if (withIcon) return <span className={`${styles.icon} mr-2`}>{withIcon}</span>;
    return null;
  };

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      title={title}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <div className={styles.loader} style={{ width: loaderSize(), height: loaderSize(), backgroundColor: loaderColor() }}>
            <FaSpinner />
          </div>
        </span>
      ) : (
        <>
          {buttonIcon()} {body}
        </>
      )}
    </button>
  );
};
