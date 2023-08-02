import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assuming 'open' is your own async function that fetches data from an API
async function open() {
  // Simulate form submission delay of 11 seconds (11000 milliseconds)
  await new Promise(resolve => setTimeout(resolve, 11000));

  // ... implement your function that fetches data and returns it
  // For example purposes, this function returns a string
  return "Thank you for choosing IBG!"; // Optional message for now... 
}

const SuccessToast = () => {
  const [myMessage, setMyMessage] = useState("");

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const message = await open();
        setMyMessage(message);
      } catch (error) {
        // Handle any errors that may occur during fetch
        console.error('Error fetching data:', error, myMessage);
        // Optionally, display an error toast to the user
        toast.error('An error occurred while fetching data.');
      }
    };

    fetchResponse();
  }, [myMessage]);

  useEffect(() => {
    // Display the toast with the fetched message when myMessage is not empty
    if (myMessage) {
      toast(myMessage, {
        type: 'success',
        autoClose:11533,
        position: 'bottom-right',
        // Add more options as needed based on the documentation of react-toastify
      });
    }
  }, [myMessage]);

  console.log(myMessage);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default SuccessToast;




