import React, { useEffect } from "react";
import { getVideoGame } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import Videogames from "../components/videogames.jsx";


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideoGame());
    }, [dispatch])
    return (
        <div>            
            <div>
                <Videogames/>
            </div>
        </div>
    )
}