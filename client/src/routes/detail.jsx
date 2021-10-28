import React, { useEffect } from "react";
import { getVideoGameID } from "../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { RatingView } from 'react-simple-star-rating'
import icon from "../styles/home-create.png";
import "../styles/detail.css";

export default function Detail(props) {
  const videogame = useSelector((state) => state.Videogame)
  const dispatch = useDispatch();  
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(getVideoGameID(id));
  }, [dispatch, id]);  
  const image = videogame?.background_image;
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
          <p className="detail_text"><RatingView ratingValue={videogame.rating} /* RatingView Props */ /></p>
        </div>
        <div>
          <h2 className="detail_subtitle">Release Date</h2>
          <p className="detail_text">{videogame.released}</p>
        </div>     
        <div>
          <h2 className="detail_subtitle">Platforms</h2>
          <div className="detail_text">{videogame.platforms?.map((e) => (
              <li key={e.platform.name} value={e.platform.name}>
                {e.platform.name}
              </li>
            ))}</div>
        </div>
        <div>
          <h2 className="detail_subtitle">Genres</h2>
          <p className="detail_text">{videogame.genres?.map((e) => (
              <li key={e.name} value={e.name}>
                {e.name}
              </li>
            ))}</p>
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