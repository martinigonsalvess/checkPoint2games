import React, { useState } from 'react';
import { FaGratipay } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Game({ name, background_image, rating, bestRating, id }){
    const [ favourite, setFavourite ] = useState(false);
    // const [ rate, setRate] = useState(true)

    const click =(e)=>{
        setFavourite(!favourite ? e.target.value='red' : "")
    }
    // const bestRatingClick=(e)=>{
    //     setRate(!rate ? bestRating : e.target.value="blue");
    //     console.log(rate)
    // }
        // const bestRating = game.sort((b,a) => a.rating-b.rating).filter(e => e.rating > 4.5)
  

    return(
        
        <div>

            <button type="button" onClick={ bestRating}>Best Rating</button>
           
            
            <h2><Link to={`/gamedetails/${id}`}>{name}</Link><FaGratipay  onClick={click} style={{color:favourite}}/></h2>

            <img src={background_image} alt="" height="200px" width="auto"/>
            <p>Rating: {rating}</p>
            
        

        </div>
    );
}
export default Game;