import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./favorites.module.css";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  // 📍 Estado para la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // 📍 Lógica de paginación
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = myFavorites.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(myFavorites.length / cardsPerPage);

  return (
    <div className={style.all}>
      <div className={style.cards}>
        {myFavorites.length === 0 ? (
          <p>No tienes favoritos aún</p>
        ) : (
          currentCards.map((char) => (
            <Card
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
            />
          ))
        )}
      </div>

      {/* 📍 Paginación con botones numerados */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
};

export default Favorites;
