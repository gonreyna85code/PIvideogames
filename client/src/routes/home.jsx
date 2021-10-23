import React, { useEffect } from "react";
import { getVideoGame } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import Videogames from "../components/videogames.jsx";
import Navbar from "../components/navbar.jsx";
import Filter from "../components/filter.jsx";
import icon from "../styles/home-create.png";
import "../styles/home.css";


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideoGame());
    }, [dispatch])
    return (
        <div  className='home'>  
        <div>
        <a href="/create"  className='detail_icon'>
          <div>
          <img src={icon} alt="" width='60px' height='60px' className="detail_img"/>
          Create Videogame
          </div>
        </a>
        <Navbar/>
        <div>
            <Filter/>
        </div>
      </div>          
            <div>
                <Videogames/>
            </div>
        </div>
    )
}