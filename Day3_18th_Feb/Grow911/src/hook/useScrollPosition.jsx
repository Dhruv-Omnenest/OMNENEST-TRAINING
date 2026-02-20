import { useState, useEffect } from 'react';

export function useScrollPosition(threshold = 50) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowButton(currentScroll > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [threshold]);

  return showButton;
}
