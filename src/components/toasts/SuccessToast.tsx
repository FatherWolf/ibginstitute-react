import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assuming 'close' is your own async function that fetches data from an API
async function close() {
  // ... implement your function that fetches data and returns it
  // For example purposes, this function returns a string
  return "This is a toast message!";
}

const SuccessToast = () => {
  const [myMessage, setMyMessage] = useState("");

  const handleSubmit = async () => {
    const message = await close();
    setMyMessage(message);
    
    // Show the toast immediately after submit
    toast.success(message);
  };

  console.log(myMessage);

  return (
    <div>
      
      <ToastContainer />
    </div>
  );
}

export default SuccessToast;
