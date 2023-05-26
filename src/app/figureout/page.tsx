"use client"
import { useState } from 'react';

const MyComponent = () => {
  const [showElement, setShowElement] = useState(true);

  const handleElementClick = () => {
    setShowElement(false);
  };

  return (
    <>
      {showElement && (
        <div id="myElement" onClick={handleElementClick}>
          Click me to delete
        </div>
      )}
    </>
  );
};

export default MyComponent;
