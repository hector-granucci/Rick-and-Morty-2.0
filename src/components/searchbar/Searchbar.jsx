import React from "react";
import { useDispatch } from "react-redux";
import { searchCharacterByName, getAllCHARACTERS } from "../../redux/actions/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    if (name.trim() === "") {
      // si el input está vacío, vuelve a mostrar todos
      dispatch(getAllCHARACTERS());
    } else {
      dispatch(searchCharacterByName(name));
    }
  };

  return (
    <div>
      <input type="text" placeholder="Buscar personaje..." value={name} onChange={handleChange}/>
      
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;