import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assuming 'open' is your own async function that fetches data from an API
async function open() {
  // ... implement your function that fetches data and returns it
  // For example purposes, this function returns a string
  return "Thank you for choosing IBG!"; // Placeholder message for now...
}

const SuccessToast = () => {
  const [myMessage, setMyMessage] = useState("");


  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const placeholder = await open(); // TODO: `placeholder`
        setMyMessage(placeholder); // Set the fetched message to the state variable
      } catch (error) {
        // Handle any errors that may occur during fetch
        console.error('Error fetching data:', error, myMessage);
        // Optionally, display an error toast to the user
        toast.error('An error occurred while fetching data.');
      }
    };

    fetchResponse();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    // Do nothing, don't display the toast message
  }, [myMessage]);

  console.log(myMessage);

  return (
    <div>
      
      <ToastContainer />
    </div>
  );
}

export default SuccessToast;

