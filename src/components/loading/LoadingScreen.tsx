import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div id="loading-screen">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
