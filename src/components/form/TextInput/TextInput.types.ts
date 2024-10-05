export type TextInputSize = "large" | "small" | "default";

export interface TextInputProps {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "number"; // Specify supported input types
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  size?: TextInputSize;
  inputClass?: string;   
  labelClass?: string;
  containerClass?: string;
}
