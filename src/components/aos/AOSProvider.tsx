import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
  children: React.ReactNode;
  duration?: number;
  once?: boolean;
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children, duration = 1000, once = true }) => {
  useEffect(() => {
    AOS.init({
      duration,
      once,
    });

    return () => {
      AOS.refresh(); // Refresh AOS on component mount/unmount
    };
  }, [duration, once]);

  return <>{children}</>;
};

export default AOSProvider;
