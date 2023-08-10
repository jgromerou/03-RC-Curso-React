import { useState } from 'react';
import Navbar from './components/header/Navbar';
import SelectCategories from './components/ui/SelectCategories';
import Search from './components/ui/Search';
import GifCard from './components/GifCard';
import Banner from './components/header/Banner';
import { useFetch } from './components/hooks/useFetch';
import { Loading } from './components/ui/Loading';

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
  const [search, setSearch] = useState('random');

  const { data: dataCateg } = useFetch(`gifs/categories?api_key=${apiKey}`);
  const { data: dataSearch, isLoading: isLoadingSearch } = useFetch(
    `gifs/search?api_key=${apiKey}&q=${search}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );

  const onChangeByCategory = (event) => {
    setSearch(event.target.value);
  };

  const onChangeSearch = (event) => {
    const data = event.target.value;
    if (data.length >= 2) {
      setSearch(event.target.value);
    }
  };

  const resultsPerPage = 8; // Número de resultados por página
  const [resultsdisplayed, setResultsdisplayed] = useState(resultsPerPage);
  const showMoreResults = () => {
    setResultsdisplayed(resultsdisplayed + resultsPerPage);
  };
  const resultsToShow = dataSearch.slice(0, resultsdisplayed);

  if (isLoadingSearch) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Banner />

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <SelectCategories
              dataItem={dataCateg}
              onChangeCategory={(event) => onChangeByCategory(event)}
            />
          </div>
          <div className="col-sm-6">
            <Search onChangeSearch={(event) => onChangeSearch(event)} />
          </div>
        </div>
      </div>

      <div>
        <div className="album pt-5 pb-4">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              <GifCard dataItem={resultsToShow} />
            </div>
          </div>
        </div>
        <div className="container center-vertically text-center mb-4">
          {resultsdisplayed < dataSearch.length && (
            <button
              className="btn btn-outline-primary"
              onClick={showMoreResults}
            >
              Cargar más resultados
            </button>
          )}
        </div>
      </div>
    </>
  );
};
