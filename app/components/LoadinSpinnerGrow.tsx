import React from 'react';

// this id Loading spinner grow component used accross the app.
const LoadinSpinnerGrow = () => {
  return (
    <div className="spinner-grow myPrimary-Text" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadinSpinnerGrow;
