import React, { useEffect } from "react";
import { getVideoGameID } from "../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import icon from "../styles/home.jpg";
export default function Detail(props) {
  const id = props.match.params.id;
  const videogame = useSelector((state) => state.Videogame);
  console.log(videogame)
  const image = videogame.background_image;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideoGameID(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="detail"> 
      <div>
        <a href="/home"  className='detail_icon'>
          <div>
          <img src={icon} alt="" className="detail_img"/>
          </div>
        </a>
      </div>     
        <h1 className="detail_title">{videogame.name}</h1>
        <div className="img_container">
          <img className="det_img" src={image} width={400} alt="" />
        </div>
        <div className="foot">          
        </div>
      </div>
    </div>
  );
}