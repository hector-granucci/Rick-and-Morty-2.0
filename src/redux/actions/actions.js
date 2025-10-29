import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE,FILTER_STATUS, FILTER_SPECIES, FILTER_GENDER, FILTER_ORIGIN } from "./action-types";
import axios from "axios";

const URL_BASE = "https://rickandmortyapi.com/api/character"

export const getAllCHARACTERS = () => {
    return async (dispatch) => {
        try{
            const { data } = await axios (URL_BASE);
            return dispatch ({ type: GET_ALL_CHARACTERS, payload: data.results })
        } catch (error){
            console.log("error 404")
        }
    }
}

export const searchCharacterByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${URL_BASE}/?name=${name}`);
      return dispatch({ type: GET_ALL_CHARACTERS, payload: data.results });
    } catch (error) {
      alert("No se encontró ningún personaje con ese nombre 😢");
    }
  };
};


export const getCharacterDetail = (id) => {
    return (dispatch) => {
        axios(`${URL_BASE}/${id}`)
        .then(({ data }) => {
            return dispatch({ type: GET_CHARACTER_DETAIL,
                payload: data})
            })
       .catch((error) => {
            console.log(error);
        })
    }
}


export const cleanDetail = () => {
    return {type: CLEAN_DETAIL}
}

export const addFavorite = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

// acción genérica para filtrar
export const filterByStatus = (status) => ({
  type: FILTER_STATUS,
  payload: status,
});

export const filterBySpecies = (species) => ({
  type: FILTER_SPECIES,
  payload: species,
});

export const filterByGender = (gender) => ({
  type: FILTER_GENDER,
  payload: gender,
});

export const filterByOrigin = (origin) => ({
  type: FILTER_ORIGIN,
  payload: origin,
});