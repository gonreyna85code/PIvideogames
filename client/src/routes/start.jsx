import React from "react";
import "../styles/start.css";

export default function Start() {
  return (
    <div className='App Fade'>
    <div  className="start">
      <div className="title">
        <h1>Simple Videogames Database</h1>
      </div>
      <div>
        <form action="/home" >
          <input type="submit" value="Start" className="start_button"/>
        </form>
      </div>
    </div>
    </div>
  );
}
