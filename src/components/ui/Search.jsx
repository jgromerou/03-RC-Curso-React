import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Toast from '../../helpers/toast';

const Search = ({ onClickSearch }) => {
  const { register, handleSubmit, reset, setFocus } = useForm({
    mode: 'onSubmit',
  });

  useEffect(() => {
    setFocus('search');
  }, []);

  const handleSearch = (data) => {
    const { search } = data;
    const searchedText = search.trim();
    if (searchedText.length < 3 || searchedText.length > 40) {
      if (searchedText === '') {
        Toast.fire({
          icon: 'warning',
          iconColor: '#f8504b',
          title: '¡Ups! Parece que olvidó ingresar algo en la búsqueda.',
        });
        return;
      }
      Toast.fire({
        icon: 'warning',
        iconColor: '#f8504b',
        title: 'Debe ingresar entre 3 y 40 caracteres.',
      });
      return;
    }
    onClickSearch(searchedText);
    reset();
  };

  return (
    <form className="d-flex gap-2" onSubmit={handleSubmit(handleSearch)}>
      <input
        name="search"
        type="search"
        className=" form-control form-control-dark text-dark"
        placeholder="Buscar Gifs..."
        aria-label="Search"
        maxLength={40}
        {...register('search', {})}
      />

      <button className="btn btn-primary" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default Search;
