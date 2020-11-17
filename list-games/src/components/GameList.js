import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game from './Game';

function GameList(){
const [ game ,setGame ] = useState([]);

const getGame = () => {
    axios.get("https://wild-games.basile.vernouillet.dev/games/")
    .then(res => {setGame(res.data)})
};
useEffect(() => {
    getGame()           
}, [] )
    return(
        <>
        {game.map(result =>{
            return<Game key={result.id} {...result}/>
        
        })}
       
        
    
        </>

    );
}
export default GameList;