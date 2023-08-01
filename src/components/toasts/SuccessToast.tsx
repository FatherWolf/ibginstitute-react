
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessToast = ({ message = "Shut Up!" }) => {
  
 // Using useEffect to show the toast as soon as the component is rendered
  useEffect(() => {
    toast(message);
  }, [message]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default SuccessToast;

