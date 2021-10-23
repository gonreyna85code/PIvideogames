import React, { useEffect } from "react";
import { getVideoGameID } from "../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import icon from "../styles/home-create.png";
import "../styles/detail.css";

export default function Detail(props) {
  const videogame = useSelector((state) => state.Videogame)
  // const genres = useSelector((state) => state.Videogame.genres.map((e) => e.name).join(", "));
  // const platforms = useSelector((state) => state.Videogame.platforms.map((e) => e.platform.name).join(", "));
  const dispatch = useDispatch();
  
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(getVideoGameID(id));
  }, [dispatch, id]);  
  const image = videogame.background_image;
  console.log(videogame)
  
  return (
    <div>
      <div className="detail"> 
      <div>
        <a href="/home"  className='detail_icon'>
          <div>
          <img src={icon} alt="" width='60px' height='60px' className="detail_img"/>
          </div>
        </a>
      </div>     
        <h1 className="detail_title">{videogame.name}</h1>
        <div>
        <div className="img_container">
          <img className="det_img" src={image} width={400} alt="" />
        </div>
        <div>
          <h2 className="detail_subtitle">Rating</h2>
          <p className="detail_text">{videogame.rating}</p>
        </div>
        <div>
          <h2 className="detail_subtitle">Release Date</h2>
          <p className="detail_text">{videogame.released}</p>
        </div>     
        <div>
          <h2 className="detail_subtitle">Platforms</h2>
          <div className="detail_text">{}</div>
        </div>
        <div>
          <h2 className="detail_subtitle">Genres</h2>
          <p className="detail_text">{}</p>
        </div>
        
        </div>
        <div className="foot">          
        </div>
        <div>
          <h2 className="detail_title">Description</h2>
          <p className="detail_description">{videogame.description_raw}</p>
        </div>
      </div>
    </div>
  );
}