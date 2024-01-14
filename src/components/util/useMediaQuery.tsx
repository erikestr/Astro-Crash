import { useState, useEffect } from 'react';

export const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    // Initial check
    updateMatches();

    // Add listener for changes
    mediaQuery.addListener(updateMatches);

    // Cleanup on component unmount
    return () => {
      mediaQuery.removeListener(updateMatches);
    };
  }, [query]);

  return matches;
};