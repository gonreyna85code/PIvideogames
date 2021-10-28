import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_ID,
  GET_GENRES,
  GET_SEARCH,
  GET_BY_DB,
  GET_BY_GENRE,
  GET_BY_REV,
  GET_ABC,
  GET_RATING,
} from "./actions.js";

const initialState = {
  Videogames: [],
  Videogame: {},
  Genres: [],
  Filtrados: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_VIDEOGAMES) {
    return {
      ...state,
      Videogames: action.payload,
      Filtrados: action.payload,
    };
  }
  if (action.type === GET_VIDEOGAME_ID) {
    return {
      ...state,
      Videogame: action.payload,
    };
  }
  if (action.type === GET_BY_GENRE) {
    return {
      ...state,
      Filtrados: [...state.Videogames].filter((game) =>
      game.genres.find((e) => e.name === action.payload)),
    };
  }
  if (action.type === GET_BY_DB) {
    return {
      ...state,
      Filtrados: [...state.Videogames].filter((game) => game.database_created),
    };
  }
  if (action.type === GET_ABC) {
    return {
      ...state,
      Filtrados: [...state.Filtrados].sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    };
  }
  if (action.type === GET_RATING) {
    return {
      ...state,
      Filtrados: [...state.Filtrados].sort(function (a, b) {
        if (a.rating < b.rating) {
          return -1;
        }
        if (a.rating > b.rating) {
          return 1;
        }
        return 0;
      }),
    };
  }
  if (action.type === GET_BY_REV) {
    return {
      ...state,
      Filtrados: [...state.Filtrados].reverse(),
    };
  }
  if (action.type === GET_GENRES) {
    return {
      ...state,
      Genres: action.payload,
    };
  }
  if (action.type === GET_SEARCH) {
    return {
      ...state,
      Filtrados: action.payload,
    };
  }
  return state;
}

export default rootReducer;
