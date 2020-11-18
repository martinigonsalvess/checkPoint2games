import React, { useState } from 'react';
import { FaGratipay } from "react-icons/fa";

function Game({ name, background_image, rating, bestRate, bestRating }){
    const [ favourite, setFavourite ] = useState(false);
    // const [ rate, setRate] = useState(true)

    const click =(e)=>{
        setFavourite(!favourite ? e.target.value='red' : "")
    }
    // const bestRatingClick=(e)=>{
    //     setRate(!rate ? bestRating : e.target.value="blue");
    //     console.log(rate)
    // }

    return(
        
        <div>

            <button type="button" >Best Rating</button>
           
            
            <h2>{name} <FaGratipay  onClick={click} style={{color:favourite}}/></h2>
            <img src={background_image} alt="" height="200px" width="auto"/>
            <p>Rating: {rating}</p>
            
        

        </div>
    );
}
export default Game;