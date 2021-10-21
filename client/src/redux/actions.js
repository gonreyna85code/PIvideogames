import axios from 'axios';
export const GET_VIDEOGAMES = "GET_VIDEOGAMES",
GET_VIDEOGAME_ID = 'GET_VIDEOGAME_ID',
POST_VIDEOGAME = 'POST_VIDEOGAME',
GET_GENRES = 'GET_GENRES';


export function getVideoGame() {
    return async function(dispatch) {
        try {
            const json = await axios.get("http://localhost:3001/videogames");
            return dispatch({ type: "GET_VIDEOGAMES", payload: json.data})
        } catch(error) {
            console.log(error)
        };
    }
}
export function getVideoGameID(id) {
    return async function(dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/videogame/${id}`);
            return dispatch({ type: "GET_VIDEOGAME_ID", payload: json.data})
        } catch(error) {
            console.log(error)
        };
    }
}
export function getGenres() {
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/generos/');
            return dispatch({ type: "GET_GENRES", payload: json.data})
        } catch(error) {
            console.log(error)
        };
    }
}
export function postVideogame(videogame) {
  
    return async function (dispatch) {
      try {
        if(videogame !== ''){await axios.post("http://localhost:3001/videogame", videogame)};
      } catch (error) {
        console.log(error);
      }
    };
  
}