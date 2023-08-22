import { useState, useEffect } from 'react';
import { giphyAxios } from '../config/AxiosGiphy';

export const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getFetch();
  }, [url]);

  const getFetch = async () => {
    try {
      const { data } = await giphyAxios.get(url);
      setDataFetch(data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    data: dataFetch,
    isLoading,
    hasError: error,
  };
};
