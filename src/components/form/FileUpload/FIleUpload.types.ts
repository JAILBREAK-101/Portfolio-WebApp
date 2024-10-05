export interface FileUploadProps {
    label?: string;                         // Optional label text for the file input
    name: string;                           // Name attribute for the input element
    acceptedFileTypes?: string;             // File types to accept (e.g., "image/*")
    onChange?: (file: File) => void;        // Function to call when a file is selected or dropped
    error?: string;                         // Error message to display
    disabled?: boolean;                     // Disable the file input if true
    containerClass?: string;                // Custom class for the container element
    labelClass?: string;                    // Custom class for the label element
    inputClass?: string;                    // Custom class for the hidden input element
  }
  