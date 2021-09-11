import { useState, useEffect } from 'react';
export const useFilter = (data, difficulty) => {
  const [filteredData, setFilteredData] = useState(null);
  useEffect(() => {
    if (data) {
      if (difficulty === 'hard') {
        setFilteredData(data.records);
      }

      if (difficulty === 'medium') {
        setFilteredData(
          data.records.filter((el) => el.fields.Difficulty !== 'hard')
        );
      }

      if (difficulty === 'easy') {
        setFilteredData(
          data.records.filter((el) => el.fields.Difficulty === 'easy')
        );
      }
    }
  }, [data]);

  return filteredData;
};
