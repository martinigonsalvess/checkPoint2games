
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';

function GameList(){
    const [game, setGame] = useState([]);

    const getGame = () => {
        axios.get("https://apis.wilders.dev/wild-games/games/")
        .then(resp => {setGame(resp.data)})

    };
    useEffect(() => {
        getGame()
    },[])

    // let bestRating = game.filter(e => e.rating > 4.5);
    const bestRating = game.sort((b,a) => a.rating-b.rating).filter(e => e.rating > 4.5)
    
    // console.log(bestRating)
 
    return(
        <>
           {game.map(result => {
               return <Game key={result.id}{...result}/>
           })} 
           
           <Game bestRating={bestRating}/>
           
        </>
        
    );
}export default GameList;