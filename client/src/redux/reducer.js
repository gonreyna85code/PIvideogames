import {GET_VIDEOGAMES , GET_VIDEOGAME_ID, GET_GENRES} from './actions.js';

const initialState = {
    Videogames: [],
    Videogame: {},
    Genres: [],
}


function rootReducer(state = initialState, action){
    if(action.type === GET_VIDEOGAMES) {
        function dbid(e) {
            if (e.database_created === 'true') {
                e.id = e.id + "db";
                console.log(e.id);
            }
            return e;
          }
        return {
            ...state,
            Videogames: action.payload.map(dbid)            
        };
    }
    if(action.type === GET_VIDEOGAME_ID) {
        return {
            ...state,
            Videogame: action.payload            
        };
    }
    if(action.type === GET_GENRES) {
        return {
            ...state,
            Genres: action.payload            
        };
    }
    return state
}








export default rootReducer;