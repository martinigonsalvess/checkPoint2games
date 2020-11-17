import React, { useState, useEffect } from 'react'
import GameList from './GameList'

function Game({name, background_image, rating}){

    const [ favourite, setFavourite ] = useState(false);

    // function handleClick(){
    //     setFavourite(prevValue => { return !prevValue})
    // }
    
    // useEffect(() =>{},[])
    

    return(  
            

        <div>
        <h1>{name}</h1>
        <img src={background_image} alt="" height="200px" width="auto"/>
        <p>Rating: {rating}</p>
        <button onClick={handleClick}>Favorite</button>
        {/* <button>Best games</button> */}
        </div>
    )
}
export default Game;
