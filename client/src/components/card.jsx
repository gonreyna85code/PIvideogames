import React from "react";



export default function GameCard(props) {
    const { Titulo, Imagen } = props;
    return (
        <div>
           <li>
           <img width={100}src={Imagen} alt="No imagen"/>
           <div>
              <h4>{Titulo}</h4>
              
           </div>
           </li>
           
        </div>
    )
};