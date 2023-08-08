const Search = ({ onChangeSearch }) => {
  return (
    <input
      type="search"
      className=" form-control form-control-dark text-dark"
      placeholder="Search..."
      aria-label="Search"
      onChange={(event) => onChangeSearch(event)}
    />
  );
};

export default Search;
