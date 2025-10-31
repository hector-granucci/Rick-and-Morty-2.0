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

  const totalPages = Math.ceil(charactersToShow.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = charactersToShow.slice(indexOfFirstCard, indexOfLastCard);

  // 🔹 Ajusta la página si queda vacía
  useEffect(() => {
    if (currentCards.length === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [currentCards, currentPage]);

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

      {/* 🔹 Paginación inteligente */}
      <div className={style.pagination}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ◀
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page => 
            page === 1 || 
            page === totalPages || 
            (page >= currentPage - 2 && page <= currentPage + 2)
          )
          .map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? style.active : ""}
            >
              {page}
            </button>
          ))
        }

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Cards;
