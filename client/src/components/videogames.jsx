import React, { useEffect, useState } from 'react';
import GameCard from './card.jsx';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export default function Videogames() {
    const videogames = useSelector((state) => state.Videogames)
    const [currentPage, setCurrentPage] = useState(0);

    const next_Page = () => {
        if(videogames.length <= currentPage + 15) {
            setCurrentPage(currentPage);
        } else setCurrentPage(currentPage + 15);
    };
    const prev_Page = () => {
        if (currentPage < 16) {
            setCurrentPage(0);
        } else {
            setCurrentPage(currentPage - 15);
        }
    };
    const first_Page = () => {
        setCurrentPage(0);
    };
    const last_Page = () => {
        setCurrentPage(videogames.length - 15)
    };
    useEffect(() => {
        first_Page()
    }, [videogames]);
console.log(videogames)
    const Filtred_Videogame = videogames.slice(currentPage, currentPage + 15);
    console.log(videogames.Generos)
    return (
        <div>
            {Filtred_Videogame.length >= 15 ? (
                <div>
            <button className="button" onClick={first_Page}> {"<<"}</button>
            <button className="button" onClick={prev_Page}> {"<"}</button>
            <button className="button" onClick={next_Page}> {">"}</button>
            <button className="button" onClick={last_Page}> {">>"}</button>
            </div>
            ): null}
            <div>
            {Filtred_Videogame.map((e)  => (
                <Link key={e.id} to={"/videogame/" + e.id} > 
            <GameCard
            ID = {e.ID}
            
            Titulo = {e.name}
            Imagen = {e.background_image}
            /></Link>
            ))}
          </div>
        </div>
    )
}