import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacterDetail,
  cleanDetail,
  addFavorite,
  removeFavorite,
} from "../../redux/actions/actions";

import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detail = useSelector((state) => state.characterDetail);
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    setIsFav(myFavorites.some((char) => char.id === detail.id));
  }, [myFavorites, detail.id]);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(detail.id));
    } else {
      dispatch(addFavorite(detail));
    }
    setIsFav(!isFav);
  };

  if (!detail.name) return <p>Cargando...</p>;

  return (
    <div className={style.all}>
      <div className={style.card}>
        {/* Botón favoritos en esquina superior izquierda */}
        <button className={style.favButton} onClick={handleFavorite}>
          {isFav ? "💔 Quitar" : "❤️ Favorito"}
        </button>

        <h2>{detail.name}</h2>
        <p>Status: {detail.status}</p>
        <p>Species: {detail.species}</p>
        <p>Gender: {detail.gender}</p>
        <p>Origin: {detail.origin?.name}</p>
        <img src={detail.image} alt={detail.name} />
      </div>
    </div>
  );
};

export default Detail;
