import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./start.css";
import mario from './mario.mp3'

function Start() {
  const [getData, setGetData] = useState({
    dataAlreadyFetched: false,
    buttonTitle: "Start",
  });

  const handleOnClick =  () => {
    if (getData.dataAlreadyFetched === false) {
     new Audio(mario).play(mario);
      setGetData({
        ...getData,
        dataAlreadyFetched: true,
      });
    }
  };
  


  return (
    <>
      <div className="big-container">
        <div className="title-and-button">
          <h4 id="title">Games Teatre</h4>
          <Link to="/">
            <button className="start" onClick= {handleOnClick}>
              <h4>{getData.buttonTitle}</h4>
            </button>
          </Link> 
        </div>
      </div>
    </>
  );
}

export default Start;
