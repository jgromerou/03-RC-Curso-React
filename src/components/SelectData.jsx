export const SelectData = ({ categoriesData }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue={true}>Selecciona una Categoria</option>
            {categoriesData.map((categ) => (
              <option value={categ.gif.id}>{categ.name}</option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <input
            type="search"
            className=" form-control form-control-dark text-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  );
};
