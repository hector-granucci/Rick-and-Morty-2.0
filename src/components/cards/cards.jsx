import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCHARACTERS } from "../../redux/actions/actions";
import Card from "../card/Card";
import Filters from "../filters/Filters";
import style from "./cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const { allCharacters, filteredCharacters } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  useEffect(() => {
    dispatch(getAllCHARACTERS());
  }, [dispatch]);

  const charactersToShow = filteredCharacters.length
    ? filteredCharacters
    : allCharacters;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = charactersToShow.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(charactersToShow.length / cardsPerPage);

  return (
    <div className={style.all}>
      <Filters />

      <div className={style.cards}>
        {currentCards.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>

      {/* 📍 Paginación con botones numéricos */}
      <div className={style.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? style.active : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cards;
