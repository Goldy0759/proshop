import React from 'react';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for does not exist or an unexpected error has occurred.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;
