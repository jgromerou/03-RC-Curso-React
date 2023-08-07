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

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const resp = await fetch(`${urlApi}gifs/categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    setCategories(data);
  };

  return (
    <>
      <Navbar />

      <Banner />

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <SelectCategories dataItem={categories} />
          </div>
          <div className="col-sm-6">
            <Search />
          </div>
        </div>
      </div>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <GifCard />
          </div>
        </div>
      </div>
    </>
  );
};
