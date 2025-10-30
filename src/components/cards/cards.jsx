import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCHARACTERS } from "../../redux/actions/actions";
import Card from "../card/Card";
import Filters from "../filters/Filters";
import style from "./cards.module.css"


const Cards = () => {
  const dispatch = useDispatch();

  const { allCharacters, filteredCharacters } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllCHARACTERS());
  }, [dispatch]);

  // Mostrar filtrados si existen, si no mostrar todos
  const charactersToShow = filteredCharacters.length ? filteredCharacters : allCharacters;

  return (
    <div className={style.all}>
          <Filters />
          <div className={style.cards}>
      {charactersToShow?.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
          </div>
    </div>
  );
};

export default Cards;
