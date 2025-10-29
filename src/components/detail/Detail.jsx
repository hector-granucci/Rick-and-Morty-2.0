import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharacterDetail,
  cleanDetail,
  addFavorite,
  removeFavorite,
} from "../../redux/actions/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detail = useSelector((state) => state.characterDetail);
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  // 🔹 Trae los datos al montar el componente
  useEffect(() => {
    dispatch(getCharacterDetail(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  // 🔹 Chequea si el personaje está en favoritos
  useEffect(() => {
    setIsFav(myFavorites.some((char) => char.id === detail.id));
  }, [myFavorites, detail.id]);

  // 🔹 Maneja agregar/quitar favoritos
  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(detail.id));
    } else {
      dispatch(addFavorite(detail));
    }
    setIsFav(!isFav);
  };

  // 🔹 Renderizado condicional (mientras carga)
  if (!detail.name) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{detail.name}</h2>
      <p>Status: {detail.status}</p>
      <p>Species: {detail.species}</p>
      <p>Gender: {detail.gender}</p>
      <p>Origin: {detail.origin?.name}</p>
      <img src={detail.image} alt={detail.name} />

      <button onClick={handleFavorite}>
        {isFav ? "💔 Quitar de Favoritos" : "❤️ Agregar a Favoritos"}
      </button>

      <br />
      <button onClick={() => navigate(-1)}>⬅️ Volver</button>
    </div>
  );
};

export default Detail;
