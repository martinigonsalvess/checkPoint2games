
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';
import GameDetails from './GameDetails';


function GameList(){
    const [game, setGame] = useState([]);

    const getItem = () => {
        axios.get("https://apis.wilders.dev/wild-games/games/")
        .then(resp => {setGame(resp.data)})

    };
    useEffect(() => {
        getItem()
    },[])

    
const bestRating=()=>{game.sort((b,a) => a.rating-b.rating).filter(e => e.rating > 4.5)}    

 
    return(
        
        <>
           {game.map(result => {
               return <Game key={result.id}{...result}/> 
           })} 
           {game.map(result => {
            return <GameDetails key={result.id}{...result}/> 
        })} 
           
           <Game bestRating={bestRating}/>
           
        </>
        
    );
}export default GameList;