// import React from 'react';
// import PropTypes from 'prop-types';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

// const CustomDialog = ({ open, title, message, onClose }) => {
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>{title}</DialogTitle>
//       <DialogContent>
//         <p>{message}</p>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="primary">
//           Close
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// CustomDialog.propTypes = {
//   open: PropTypes.bool.isRequired,
//   title: PropTypes.string,
//   message: PropTypes.string,
//   onClose: PropTypes.func.isRequired,
// };

// CustomDialog.defaultProps = {
//   title: '',
//   message: '',
// };

// export default CustomDialog;

import React from 'react';
import PropTypes from 'prop-types';

const CustomDialog = ({ open, title, message, onClose }) => {
  if (!open) return null; // Don't render the dialog if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Dialog Container */}
      <div className="bg-white rounded-lg w-11/12 sm:w-1/2 lg:w-1/3 shadow-lg p-6">
        {/* Dialog Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

        {/* Dialog Content */}
        <div className="text-gray-700 mb-6">
          <p>{message}</p>
        </div>

        {/* Dialog Actions */}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

CustomDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

CustomDialog.defaultProps = {
  title: '',
  message: '',
};

export default CustomDialog;
