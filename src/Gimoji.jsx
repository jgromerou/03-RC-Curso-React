import { useEffect, useState } from 'react';
import { SelectData } from './components/SelectData';
import Navbar from './components/header/Navbar';
import SelectCategories from './components/ui/SelectCategories';
import Search from './components/ui/Search';
import GifCard from './components/GifCard';
import Banner from './components/header/Banner';

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [categories, setCategories] = useState([]);
  const [gifs, setGifs] = useState([]);
  const [search, setSearch] = useState('random');

  useEffect(() => {
    getCategories();
    getSearch();
  }, []);

  useEffect(() => {
    getSearch();
  }, [search]);

  const getCategories = async () => {
    const resp = await fetch(`${urlApi}gifs/categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    setCategories(data);
  };

  const getSearch = async () => {
    const resp = await fetch(
      `${urlApi}gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const { data } = await resp.json();
    setGifs(data);
  };

  const onChangeByCategory = (event) => {
    setSearch(event.target.value);
  };

  const onChangeSearch = (event) => {
    const data = event.target.value;
    if (data.length >= 2) {
      setSearch(event.target.value);
    }
  };
  return (
    <>
      <Navbar />

      <Banner />

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <SelectCategories
              dataItem={categories}
              onChangeCategory={(event) => onChangeByCategory(event)}
            />
          </div>
          <div className="col-sm-6">
            <Search onChangeSearch={(event) => onChangeSearch(event)} />
          </div>
        </div>
      </div>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <GifCard dataItem={gifs} />
          </div>
        </div>
      </div>
    </>
  );
};
