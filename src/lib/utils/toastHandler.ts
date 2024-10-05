import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the type for the toast status
type ToastStatus = 'success' | 'error' | 'info' | 'warn' | 'loading' | 'default';

// Define toast configuration options using ToastOptions type from react-toastify
const defaultConfig: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

// Define a custom Toast Handler function
const showToast = (status: ToastStatus, message: string, config: ToastOptions = {}): void => {
  // Combine default configuration with any custom config provided
  const toastConfig = { ...defaultConfig, ...config };

  // Determine toast type based on status
  switch (status) {
    case 'success':
      toast.success(message, toastConfig);
      break;
    case 'error':
      toast.error(message, toastConfig);
      break;
    case 'info':
      toast.info(message, toastConfig);
      break;
    case 'warn':
      toast.warn(message, toastConfig);
      break;
    case 'loading':
      toast.loading(message, { ...toastConfig, autoClose: false });
      break;
    default:
      toast(message, toastConfig);
  }
};

export default showToast;
