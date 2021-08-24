import { useState, useEffect } from 'react';

export const useRandom = (apiData) => {
  const [randomApiData, setRandomApiData] = useState(null);
  useEffect(() => {
    if (apiData) {
      setRandomApiData(
        apiData.records.sort(() => 0.5 - Math.random()).slice(0, 25)
      );
    }
  }, [apiData]);
  return randomApiData;
};
