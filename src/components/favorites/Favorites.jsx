import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./favorites.module.css";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // Calculamos las cards visibles de la página actual
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = myFavorites.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(myFavorites.length / cardsPerPage);

  // 🔹 Si la página actual quedó vacía, volvemos a la página 1
  useEffect(() => {
    if (currentCards.length === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [currentCards, currentPage]);

  return (
    <div className={style.all}>
      {myFavorites.length === 0 ? (
        <p>No tienes favoritos aún</p>
      ) : (
        <>
          <div className={style.cards}>
            {currentCards.map((char) => (
              <Card
                key={char.id}
                id={char.id}
                name={char.name}
                image={char.image}
              />
            ))}
          </div>

          {/* Paginación */}
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
        </>
      )}
    </div>
  );
};

export default Favorites;

