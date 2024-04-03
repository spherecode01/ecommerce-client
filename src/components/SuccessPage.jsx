import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the success page after 5 seconds
    const timeout = setTimeout(() => {
      navigate('https://comfy-semolina-38a9c0.netlify.app/success'); // Update the route according to your setup
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
};

export default SuccessPage;
