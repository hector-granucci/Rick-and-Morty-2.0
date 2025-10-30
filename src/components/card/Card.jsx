import {useDispatch, useSelector} from "react-redux"
import { addFavorite, removeFavorite } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./card.module.css"

const Card = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);
  const [isFav, setIsFav] = useState(false);

 useEffect(() => {
  setIsFav(myFavorites?.some((fav) => fav.id === id));
}, [myFavorites, id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ id, name, image }));
    }
  };

  return (
    <div className={style.all}>
      
      <div className={style.to}>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      </div>


      <div className={style.imagen}>
        <img src={image} alt={name}/>
      </div>


    </div>
  );
};

export default Card;