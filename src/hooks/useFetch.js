import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, limit) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);

  const [serverError, setServerError] = useState(null);

  axios.defaults.baseURL = `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};
