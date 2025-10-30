import React from "react";
import { useDispatch } from "react-redux";
import { filterByStatus, filterBySpecies, filterByGender, filterByOrigin } from "../../redux/actions/actions";
import style from "./filters.module.css"

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.all}>
      <label>Status:</label>
      <select onChange={(e) => dispatch(filterByStatus(e.target.value))}>
        <option value="">Todos</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <label>Species:</label>
      <select onChange={(e) => dispatch(filterBySpecies(e.target.value))}>
        <option value="">Todos</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <label>Gender:</label>
      <select onChange={(e) => dispatch(filterByGender(e.target.value))}>
        <option value="">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
      </select>

      <label>Origin:</label>
      <select onChange={(e) => dispatch(filterByOrigin(e.target.value))}>
        <option value="">Todos</option>
        <option value="Earth">Earth</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Filters;