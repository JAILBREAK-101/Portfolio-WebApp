export interface TextAreaProps {
    id: string;  
    value: string;
    label?: string;
    labelClass?: string;                   
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
    placeholder?: string;
    disabled?: boolean;
    textareaClass?: string;                
  }
  