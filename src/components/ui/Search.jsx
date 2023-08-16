import { useEffect, useId, useRef } from 'react';

const Search = ({ onClickSearch }) => {
  const searchInput = useRef(null);
  const botonRef = useRef(null);
  const searchId = useId();

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const search = () => {
    onClickSearch(searchInput.current.value);
    console.log(searchInput.current.value);
    searchInput.current.value = '';
    searchInput.current.placeholder = 'Puedes buscar algo genial';
    botonRef.current.className = 'btn btn-warning';
  };

  return (
    <div className="row">
      <div className="col-md-10">
        <input
          id={searchId}
          html_for={searchId}
          ref={searchInput}
          type="search"
          className=" form-control form-control-dark text-dark"
          placeholder="Search..."
          aria-label="Search"
          //onChange={(event) => onChangeSearch(event)}
        />
      </div>
      <div className="col-md-2">
        <button ref={botonRef} className="btn btn-primary" onClick={search}>
          BUSCAR
        </button>
      </div>
    </div>
  );
};

export default Search;
