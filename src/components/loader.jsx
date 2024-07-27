import React, { useState, useEffect } from 'react';

const Loader = ({ isLoading }) => {
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setLoading(false), 2000); // 2 seconds to finish animation
      return () => clearTimeout(timeout);
    }
    setLoading(isLoading);
  }, [isLoading]);

  if (!loading) return null;

  return (
    <div className="backdrop">
      <div className="progress-bar"></div>
    </div>
  );
};

export default Loader;