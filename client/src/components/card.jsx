import React from "react";



export default function GameCard(props) {
    const { Titulo, Imagen } = props;
    return (
        <div  className='card'>
           <h4 className='card-title'>{Titulo}</h4>
           <img width={200}src={Imagen} alt="No imagen" className="card-image"/>
           <div>
              
              
           </div>
           
           
        </div>
    )
};