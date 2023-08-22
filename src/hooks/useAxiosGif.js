import { useEffect, useState } from 'react';
import { giphyAxios } from '../config/AxiosGiphy';

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const useAxiosGif = (search) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 24;

  useEffect(() => {
    getFetch();
  }, [search, offset]);

  const getFetch = async () => {
    try {
      const resp = await giphyAxios.get(
        `gifs/search?api_key=${apiKey}&q=${search}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const { data } = resp.data;
      setDataFetch((prev) => {
        if (search !== searchData) {
          setSearchData(search);
          return data;
        } else {
          return [...prev, ...data];
        }
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onLoadMore = () => {
    setOffset((prev) => prev + 1 + limit);
  };

  return {
    dataFetch,
    isLoading,
    onLoadMore,
  };
};
