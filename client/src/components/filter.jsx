import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getVideoGame,
    getByGenre,
    getGenres,
    getByDb,
    getByRev,
    getAbc,
    getRating,
  } from "../redux/actions.js";


export default function Filter() {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.Genres); 
    const change = (e) =>
    e.target.value === ""
      ? dispatch(getVideoGame())
      : dispatch(getByGenre(e.target.value));   
    useEffect(() => {
      dispatch(getGenres());
    }, [dispatch]);  
    return (
       <div  className='allfilters'>
        <select  className="filtros" onChange={change} defaultValue="">
          <option key="0" value="" disabled hidden>
          &nbsp;&nbsp;SELECT GENRE:
          </option>
          <option key="01" value="">
            All
          </option>
          {genres.map((e) => (
            <option key={e.name} value={e.name}>
              {e.name}
            </option>
          ))}
        </select> 
        <button className="filtros" type="submit" onClick={() => dispatch(getByDb())}>
           Database Videogames
         </button>    
         <button className="filtros" type="submit" onClick={() => dispatch(getByRev())}>
           Invert Order
         </button>
         <button className="filtros" type="submit" onClick={() => dispatch(getAbc())}>
           Order By Name
         </button>
         <button className="filtros" type="submit" onClick={() => dispatch(getRating())}>
           Order By Rating
         </button>
      </div>
    );
  }