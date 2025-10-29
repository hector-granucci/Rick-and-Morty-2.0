import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div>
        {!myFavorites || myFavorites.length === 0 ? (
  <p>No tienes favoritos aún</p>
      ) : (
        myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;