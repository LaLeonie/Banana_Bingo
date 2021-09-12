import { useState, useEffect } from 'react';

export const useRandom = (data) => {
  const [randomApiData, setRandomApiData] = useState(null);
  useEffect(() => {
    if (data) {
      setRandomApiData(data.sort(() => 0.5 - Math.random()).slice(0, 25));
    }
  }, [data]);
  return randomApiData;
};
