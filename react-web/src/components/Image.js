// src/components/Image.js
import React, { useState } from 'react';
import Spinner from './Spinner'; // Import your Spinner component
import imageMissing from '../images/imageMissing.jpg';

const Image = ({ src, alt, style }) => {
  const [isLoading, setIsLoading] = useState(true); // Track if image is loading
  const [hasError, setHasError] = useState(false);  // Track if there's an error loading the image

  const handleImageLoad = () => {
    setIsLoading(false); // Set to false when image is loaded
  };

  const handleImageError = () => {
    setHasError(true); // Set to true when there's an error (e.g., image missing)
    setIsLoading(false); // Stop spinner even if image fails
  };

  return (
    <div style={{ position: 'relative', ...style }}>
      {isLoading && <Spinner />} {/* Show spinner while loading */}
      <img
        src={hasError ? imageMissing : src}  // Show fallback image if error occurs
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          display: isLoading ? 'none' : 'block',  // Hide image while loading
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Adjust the image to cover the container
        }}
      />
    </div>
  );
};

export default Image;
