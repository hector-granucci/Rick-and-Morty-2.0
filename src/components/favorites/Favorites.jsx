import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import style from "./favorites.module.css";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  const totalPages = Math.ceil(myFavorites.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = myFavorites.slice(indexOfFirstCard, indexOfLastCard);

  // 🔹 Si la página actual queda vacía, ir a la 1
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
        </>
      )}
    </div>
  );
};

export default Favorites;


