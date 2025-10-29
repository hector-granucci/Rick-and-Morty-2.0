import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE,FILTER_STATUS, FILTER_SPECIES, FILTER_GENDER, FILTER_ORIGIN } from "../actions/action-types";


const initialState = {
    allCharacters: [],
    allFavorites: [],
    myFavorites: [],
     filteredCharacters: [],
    characterDetail: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_CHARACTERS: 
        return {
            ...state,
            allCharacters: action.payload
        }
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload
            }  
        case CLEAN_DETAIL:
  return {
    ...state,
    characterDetail: {}
  }
        
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        )
      }; 
          case FILTER_STATUS:
      return {
        ...state,
        filteredCharacters: state.allCharacters.filter(
          (char) => char.status === action.payload
        ),
      };

    case FILTER_SPECIES:
      return {
        ...state,
        filteredCharacters: state.allCharacters.filter(
          (char) => char.species === action.payload
        ),
      };

    case FILTER_GENDER:
      return {
        ...state,
        filteredCharacters: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

      case FILTER_ORIGIN:
  return {
    ...state,
    filteredCharacters: state.allCharacters.filter(
      (char) =>
        char.origin?.name &&
        char.origin.name.toLowerCase().includes(action.payload.toLowerCase())
    ),
  };
        default:
            return {...state}
    }
} 

export default reducer;