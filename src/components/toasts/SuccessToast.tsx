import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const fetchResponse = async () => {
      const message = await close();
      setMyMessage(message);

      // Delay the display of toast by 3 seconds
      setTimeout(() => toast(message), 3000);
    };

    fetchResponse();
  }, []);

  console.log(myMessage);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default SuccessToast;

