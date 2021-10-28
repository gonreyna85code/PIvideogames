import React, { useEffect } from "react";
import { getVideoGame } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import Videogames from "../components/videogames.jsx";
import Navbar from "../components/navbar.jsx";
import Filter from "../components/filter.jsx";
import icon from "../styles/icon.png";
import "../styles/home.css";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoGame());
  }, [dispatch]);
  return (
    <div className='App Fade'>
    <div className="home">
      <a href="/create">
        <div className="detail_icon">
          <img
            src={icon}
            alt=""
            width="60px"
            height="60px"
            className="detail_img"
          />
          <div className='icon_title'>
          &nbsp;&nbsp;Create Game
          </div>
        </div>
      </a>
      <Navbar />
      <div>
        <Filter />
      </div>
      <div>
        <Videogames />
      </div>
    </div>
    </div>
  );
}
