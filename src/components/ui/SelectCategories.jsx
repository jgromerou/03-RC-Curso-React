import React from 'react';

const SelectCategories = ({ dataItem }) => {
  return (
    <select className="form-select" aria-label="Default select example">
      <option defaultValue={true}>Selecciona una Categoria</option>
      {dataItem.map((categ) => (
        <option value={categ.gif.id}>{categ.name}</option>
      ))}
    </select>
  );
};

export default SelectCategories;
