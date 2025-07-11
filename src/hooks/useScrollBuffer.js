import { useEffect, useState } from 'react';

const useScrollBuffer = () => {
  const [showBuffer, setShowBuffer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight / 2) {
        setShowBuffer(true);
      } else {
        setShowBuffer(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return showBuffer;
};

export default useScrollBuffer;
